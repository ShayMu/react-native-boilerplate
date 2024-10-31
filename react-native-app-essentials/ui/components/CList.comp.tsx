import React from 'react';
import { FlatList } from 'react-native';
import { List } from 'react-native-paper';
import useTheme from '../hooks/useTheme';

export interface CListRowProps {
    title: string | React.ReactNode
    subtitle?: string | React.ReactNode
    iconName?: string
    data?: any
}

export interface CListProps {
    rows: CListRowProps[]
    multiSelect?: boolean,
    onPress?: (rowData: CListRowProps, index: number, listData: CListProps) => any
    startEle?: (rowData: CListRowProps, index: number, listData: CListProps) => (React.ReactNode | undefined)
    endEle?: (rowData: CListRowProps, index: number, listData: CListProps) => (React.ReactNode | undefined)
    onScroll?: any
}

export default function CList(props: CListProps) {
    const renderListItem = useRenderRowItem(props);

    return <FlatList
        onScroll={props.onScroll}
        data={props.rows}
        renderItem={renderListItem}
    />
}

function useRenderRowItem(props: CListProps) {
    const [isMultiSelect, setIsMultiSelect] = React.useState(false);
    const [selectedRows, setSelectedRows] = React.useState<{ [key: string]: boolean }>({});
    const theme = useTheme();

    const renderFunc = React.useCallback(({ index, item }: { index: number, item: CListRowProps }) => {
        const id = index;
        const startEle = props.startEle ? () => props.startEle ? props.startEle(item, index, props) : undefined : undefined;
        const endEle = props.endEle ? () => props.endEle ? props.endEle(item, index, props) : undefined : undefined;
        const onPress = isMultiSelect ? () => setSelectedRows({ ...selectedRows, [id]: !selectedRows[id] }) : () => props.onPress ? props.onPress(item, index, props) : undefined;

        return <List.Item
            title={item.title}
            description={item.subtitle}
            left={startEle}
            right={endEle}
            onPress={onPress}
            onLongPress={props.multiSelect ? () => { setIsMultiSelect(!isMultiSelect); setSelectedRows({ [id]: !isMultiSelect }) } : undefined}
            style={{ backgroundColor: index % 2 ? theme.colors.primary : 'transparent' }}
        />
    }, [isMultiSelect, selectedRows, theme, props]);

    return renderFunc;
}