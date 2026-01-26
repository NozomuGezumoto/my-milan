// ============================================
// Milan - Configuration
// The Fashion & Design Capital, Italy
// ============================================

import { CityConfig } from '../types';

export const milanConfig: CityConfig = {
  id: 'milan',
  name: 'Milan',
  nameJa: 'ミラノ',
  country: 'Italy',
  countryJa: 'イタリア',
  tagline: 'Fashion & Design Capital',
  taglineJa: 'ファッションとデザインの都',
  emoji: '👗',

  center: {
    latitude: 45.4642,
    longitude: 9.1900,
  },

  bounds: {
    north: 45.5500,
    south: 45.3800,
    east: 9.3000,
    west: 9.0500,
  },

  viewBounds: {
    north: 45.5000,
    south: 45.4300,
    east: 9.2500,
    west: 9.1300,
  },

  defaultZoom: 13,

  colors: {
    // Primary - Elegant Black & Gold
    primary: '#1a1a1a',
    primaryLight: '#333333',
    primaryDark: '#0d0d0d',

    // Accent - Fashion & Style
    accent: '#c9a227',          // Golden accent
    accentSecondary: '#8b0000', // Deep red
    accentTertiary: '#f5f5f5',  // Off-white
    accentQuaternary: '#4a4a4a', // Charcoal

    // Backgrounds
    background: '#fafafa',
    backgroundElevated: '#ffffff',
    backgroundCard: '#ffffff',

    surface: '#f0f0f0',
    surfaceLight: '#fcfcfc',
    surfaceDark: '#e0e0e0',

    // Text
    textPrimary: '#1a1a1a',
    textSecondary: '#4a4a4a',
    textMuted: '#7a7a7a',

    // Semantic
    success: '#2e7d32',
    warning: '#c9a227',
    error: '#8b0000',

    // Map
    mapOverlay: 'rgba(250, 250, 250, 0.95)',
    mapOverlayLight: 'rgba(250, 250, 250, 0.80)',

    // Pins
    photoPin: '#1a1a1a',
    textPin: '#8b0000',
    cluster: '#c9a227',

    // Rank
    rank1: '#f0f0f0',
    rank2: '#c9a227',
    rank3: '#1a1a1a',

    // Borders
    border: 'rgba(26, 26, 26, 0.12)',
    borderLight: 'rgba(26, 26, 26, 0.06)',
    borderMedium: 'rgba(26, 26, 26, 0.20)',
  },

  landmarks: {
    duomo: { latitude: 45.4641, longitude: 9.1919, name: 'Duomo di Milano' },
    galleria: { latitude: 45.4657, longitude: 9.1900, name: 'Galleria Vittorio Emanuele II' },
    laScala: { latitude: 45.4676, longitude: 9.1897, name: 'Teatro alla Scala' },
    castelloSforzesco: { latitude: 45.4705, longitude: 9.1794, name: 'Castello Sforzesco' },
    santAmbrogio: { latitude: 45.4621, longitude: 9.1758, name: 'Basilica di Sant\'Ambrogio' },
    brera: { latitude: 45.4722, longitude: 9.1881, name: 'Pinacoteca di Brera' },
    navigli: { latitude: 45.4500, longitude: 9.1800, name: 'Navigli' },
    portaNuova: { latitude: 45.4833, longitude: 9.1900, name: 'Porta Nuova' },
    quadrilatero: { latitude: 45.4680, longitude: 9.1960, name: 'Quadrilatero della Moda' },
    cenacolo: { latitude: 45.4660, longitude: 9.1711, name: 'Cenacolo Vinciano' },
    sanSiro: { latitude: 45.4781, longitude: 9.1240, name: 'Stadio San Siro' },
    monumentale: { latitude: 45.4867, longitude: 9.1789, name: 'Cimitero Monumentale' },
  },

  appScheme: 'mymilan',
  storageName: 'my-milan-storage',
  
  // 👗 ファッション・デザイン・芸術・大聖堂
  symbolSuggestions: [
    '服', '装', '衣', '絹', '革', '鞄', '靴', '帽', '針', '糸',
    '美', '芸', '設', '計', '創', '造', '雅', '粋', '華', '麗',
    '聖', '堂', '塔', '館', '劇', '歌', '画', '像', '金', '銀',
  ],
  // Milan/Fashion themed emojis
  emojiSuggestions: [
    '👗', '👠', '👜', '💎', '✨', '🎭', '⛪', '🏰', '🎨', '🖼️',
    '☕', '🍝', '🍷', '🛍️', '💄', '👔', '🧥', '👒', '⚽', '🏎️',
    '🌹', '🌸', '✝️', '🎼', '🎹', '⭐', '🌙', '💫', '❤️', '🖤',
  ],
};

