
import { TextInput, Text } from 'react-native';
import { useStyle } from './CTextInput.style.ts';
import React from 'react';

export function CTextInput({
    value='', setValue=null, onChange=null
}) {
    const [isFocused, setIsFocused] = React.useState(false);
    const compStyle = useStyle(isFocused);

    const onChangeValue = React.useCallback(newValue=>{
        if (setValue) setValue(newValue);
        if (onChange) onChange(newValue);
    }, [setValue, onChange]);

    return <TextInput 
        style={compStyle} 
        value={value} 
        onChangeText={onChangeValue} 
        onFocus={()=>setIsFocused(true)}
        onBlur={()=>setIsFocused(false)}
    />;
}