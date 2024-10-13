import React from 'react';
import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

const inputPadding = 10;

export function useTheme() {
    const colors = useColorTheme();
    const fonts = useFonts();
    const styles = React.useMemo(()=>StyleSheet.create({
        input: {
            backgroundColor: colors.inputBackgroundColor,
            color: colors.inputTextColor,
            fontSize: fonts.normal,
            padding: inputPadding,
            borderWidth: 2,
            borderRadius: 10,
            borderBottomColor: colors.primary,
            borderTopColor: colors.borderColor,
            borderRightColor: colors.borderColor,
            borderLeftColor: colors.borderColor,
        },
        inputFocused: {
            borderTopColor: colors.primary,
            borderRightColor: colors.primary,
            borderLeftColor: colors.primary,
        }
    }), [colors]);

    return {
        styles,
        colors,
        fonts
    };
}

function useFonts() {
    return {
        larger: 60,
        large: 40,
        normal: 20,
        small: 10,
    };
}

function useColorTheme() {
    const isDark = useIsDark();
    const colors = React.useMemo(()=>Colors[isDark?'dark':'light'], [isDark]);

    return colors;
}

function useIsDark() {
    return false;
}

