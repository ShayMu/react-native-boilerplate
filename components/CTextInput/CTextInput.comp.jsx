
import { TextInput, Text, View } from 'react-native';
import { useStyle } from './CTextInput.style.ts';
import React from 'react';

export default function CTextInput({
    value='', setValue=null, onChange=null, title=''
}) {
    const [isFocused, setIsFocused] = React.useState(false);
    const compStyle = useStyle(isFocused);

    const onChangeValue = React.useCallback(newValue=>{
        if (setValue) setValue(newValue);
        if (onChange) onChange(newValue);
    }, [setValue, onChange]);

    return <View style={compStyle.container}>
        <Text style={compStyle.title}>{title}</Text>
        <TextInput 
            style={compStyle.input} 
            value={value} 
            onChangeText={onChangeValue} 
            onFocus={()=>setIsFocused(true)}
            onBlur={()=>setIsFocused(false)}
        />
        </View>;
}