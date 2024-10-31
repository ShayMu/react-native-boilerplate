import { TextInput } from 'react-native-paper';
import React from 'react';

interface CTextInputProps {
    value: string,
    setValue?: any,
    onChange?: any,
    title?: string
}


export default function CTextInput({
    value='', setValue=null, onChange=null, title=''
}:CTextInputProps) {

    const innerOnChange = React.useCallback((text:string)=>{
        if (setValue) setValue(text);
        if (onChange) onChange(text);
    }, [setValue, onChange])

    return <TextInput label={title} value={value} mode='outlined' onChangeText={innerOnChange}/>
}