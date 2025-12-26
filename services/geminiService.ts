import { GoogleGenAI } from "@google/genai";

// Initialize the client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Converts a File object to a base64 string suitable for the API (stripping headers).
 */
const fileToGenerativePart = async (file: File): Promise<{ inlineData: { data: string; mimeType: string } }> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      // Split the base64 string to get the data part
      const base64Data = base64String.split(',')[1];
      resolve({
        inlineData: {
          data: base64Data,
          mimeType: file.type,
        },
      });
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

/**
 * Generates a console-styled avatar using Gemini 2.5 Flash Image (Nano Banana).
 */
export const generateConsoleAvatar = async (
  imageFile: File,
  consoleName: string,
  consoleEra: string
): Promise<string> => {
  try {
    const imagePart = await fileToGenerativePart(imageFile);

    const prompt = `
      Transforme esta pessoa em um personagem de videogame com o estilo gráfico do console ${consoleName} (${consoleEra}).
      Mantenha as características faciais da pessoa reconhecíveis (cabelo, formato do rosto, óculos se houver), mas aplique estritamente a estética gráfica daquela época.
      
      Detalhes técnicos para o estilo:
      - Se for 8-bit/Atari/NES: Pixel art, paleta de cores limitada.
      - Se for 16-bit/SNES/Mega Drive: Pixel art detalhada, cores vibrantes.
      - Se for Game Boy: Monocromático esverdeado, pixel art.
      - Se for PS1/N64: Low poly, texturas pixeladas, sem filtragem de textura.
      - Se for PS2/Moderno: Gráficos 3D mais limpos, estilo renderizado.
      
      A saída deve ser SOMENTE a imagem transformada. Alta qualidade artística dentro das limitações do estilo retrô.
    `;

    // Using 'gemini-2.5-flash-image' as requested (mapped from "Nano Banana")
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          imagePart,
          { text: prompt }
        ]
      }
    });

    // Iterate through parts to find the image
    const parts = response.candidates?.[0]?.content?.parts;
    
    if (!parts) {
      throw new Error("No content generated");
    }

    for (const part of parts) {
      if (part.inlineData && part.inlineData.data) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }

    throw new Error("No image data found in response");

  } catch (error) {
    console.error("Error generating avatar:", error);
    throw error;
  }
};