import { Theme } from './types';

export const LIGHT_THEME: Theme = {
    name: 'light',
    colors: {
        primary: '#D84D4D',
        secondary: '#0F1828',
        background: '#ffffff',
        border: '#A4A4A4',
        success: '#4CAF50', // Yeşil - Başarı için
        warning: '#FFC107', // Sarı - Uyarı için
        danger: '#F44336',  // Kırmızı - Hata için
    }
};

export const DARK_THEME: Theme = {
    name: 'dark',
    colors: {
        primary: '#D84D4D',
        secondary: '#ffffff',
        background: '#0F1828',
        border: '#A4A4A4',
        success: '#66BB6A', // Daha koyu bir yeşil - Başarı
        warning: '#FFB300', // Daha koyu bir sarı - Uyarı
        danger: '#E57373',  // Daha yumuşak kırmızı - Hata
    }
};
