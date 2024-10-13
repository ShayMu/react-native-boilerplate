import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import { StyleSheet } from 'react-native';

export function useStyle(isFocused: boolean) {
    const theme = useTheme();

    const myStyle = React.useMemo(()=>{
        return StyleSheet.create({
            input: {...theme.styles.input, ...(isFocused?theme.styles.inputFocused:{})},
            container: {
                position: 'relative',
                marginTop: 20
            },
            title: {
                position: 'absolute',
                top: -theme.fonts.normal/1.5,
                left: 15,
                zIndex: 10,
                paddingHorizontal: 5,
                fontSize: theme.fonts.normal,
                backgroundColor: theme.colors.inputBackgroundColor,
                color: theme.colors.inputTitleColor,
            }
        });
    }, [theme, isFocused]);

    return myStyle;
}