import React from 'react';
import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

const inputFontSize = 20;
const inputPadding = 10;

export function useTheme() {
    const colors = useColorTheme();
    const currTheme = React.useMemo(()=>StyleSheet.create({
        input: {
            backgroundColor: colors.inputBackgroundColor,
            borderBottomColor: colors.primary,
            color: colors.inputTextColor,
            fontSize: inputFontSize,
            padding: inputPadding,
            borderWidth: 2,
            borderRadius: 5
        },
        inputFocused: {
            borderColor: colors.primary
        }
    }), [colors]);

    return currTheme;
}

function useColorTheme() {
    const isDark = useIsDark();
    const colors = React.useMemo(()=>Colors[isDark?'dark':'light'], [isDark]);

    return colors;
}

function useIsDark() {
    return false;
}

