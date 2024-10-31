import { View } from 'react-native';

interface CScreenProps {
    children: any
}

export default function CScreen(props: CScreenProps) {
    return <View style={{ height: '100%' }}>{props.children}</View>
}