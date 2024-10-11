import React from 'react';
import { useTheme } from '@/hooks/useTheme';

export function useStyle(isFocused: boolean) {
    const theme = useTheme();

    const myStyle = React.useMemo(()=>{
        return {...theme.input, ...(isFocused?theme.inputFocused:{})}
    }, [theme, isFocused]);

    return myStyle;
}