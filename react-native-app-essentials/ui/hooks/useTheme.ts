import React from 'react';
import Colors from "../constants/colors";
import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

let _customLightColors: object = {};
let _customDarkColors: object = {};


export default function useTheme() {
    const isDark = useIsDark();
    const colors = useColorTheme(isDark);
    const currTheme: any = React.useMemo(() => {
        const mytheme = { ...isDark ? MD3DarkTheme : MD3LightTheme };
        return { ...mytheme, colors: { ...mytheme.colors, ...colors }, isDarkMode: isDark };
    }, [isDark, colors]);

    return currTheme;
}

export function setCustomThemeColors(customLightColors: object = {}, customDarkColors: object = {}) {
    _customLightColors = customLightColors;
    _customDarkColors = customDarkColors;
}

function useColorTheme(isDark: boolean) {
    const colors = React.useMemo(() => ({ ...Colors[isDark ? 'dark' : 'light'], ...(isDark ? (_customDarkColors || {}) : (_customLightColors || {})) }), [isDark, _customLightColors, _customDarkColors]);
    return colors;
}

function useIsDark() {
    return false;
}
