export interface ThemeColors {
    primary: string;
    secondary: string;
    background: string;
    border: string;
}

export interface Theme {
    name: string;
    colors: ThemeColors;
}

export interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
} 