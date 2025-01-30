export interface ThemeColors {
    primary: string;
    secondary: string;
    background: string;
    border: string;
    success: string;
    warning: string;
    danger: string;
}

export interface Theme {
    name: string;
    colors: ThemeColors;
}

export interface ThemeContextType {
    theme: Theme;
    toggleTheme: (themeName?: string) => void;
} 