import { TextStyle } from "react-native";
import { Text } from "react-native-paper";

interface CTextProps {
    style?: TextStyle,
    children: any
}

export default function CText(props: CTextProps) {
    return <Text style={props.style}>{props.children}</Text>
}