import { ConsoleOption } from './types';

export const CONSOLES: ConsoleOption[] = [
  {
    id: 'atari',
    name: 'Atari 2600',
    era: '1977 - 2ª Geração',
    description: 'Blocos grandes, cores vibrantes mas limitadas. O início de tudo.',
    color: 'border-yellow-600',
    gradient: 'bg-gradient-to-br from-yellow-800 to-amber-600'
  },
  {
    id: 'nes',
    name: 'Nintendinho (NES)',
    era: '1983 - 3ª Geração',
    description: 'Pixel art clássica de 8-bits. Sprite limpo e icônico.',
    color: 'border-red-600',
    gradient: 'bg-gradient-to-br from-red-800 to-gray-700'
  },
  {
    id: 'gameboy',
    name: 'Game Boy',
    era: '1989 - Portátil',
    description: 'Estilo monocromático esverdeado. Retrô portátil puro.',
    color: 'border-green-600',
    gradient: 'bg-gradient-to-br from-green-800 to-emerald-600'
  },
  {
    id: 'snes',
    name: 'Super Nintendo',
    era: '1990 - 4ª Geração',
    description: '16-bits refinado, pixels detalhados e paleta rica.',
    color: 'border-purple-600',
    gradient: 'bg-gradient-to-br from-purple-800 to-indigo-600'
  },
  {
    id: 'ps1',
    name: 'PlayStation 1',
    era: '1994 - 5ª Geração',
    description: 'Polígonos trêmulos (jitter), texturas pixeladas, o início do 3D.',
    color: 'border-gray-400',
    gradient: 'bg-gradient-to-br from-gray-700 to-slate-500'
  },
  {
    id: 'cyber',
    name: 'PC Gamer RGB',
    era: 'Atualidade',
    description: 'Ray tracing, neons e alta definição futurista.',
    color: 'border-cyan-500',
    gradient: 'bg-gradient-to-br from-cyan-700 to-blue-600'
  }
];