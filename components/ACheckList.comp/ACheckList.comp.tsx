import { CList, CListRowProps, CText } from "@/react-native-app-essentials";
import React from "react";
import myStyle from './ACheckList.style';
import { Icon } from "react-native-paper";

export interface ACheckListItemProps {
    title: string
    subtitle?: string
    iconName?: string
    isChecked?: boolean
}

interface ACheckListProps {
    items: ACheckListItemProps[]
    setItems: any
    onScroll?: any
}


export default function ACheckList(props: ACheckListProps) {
    const checkListRows = useBuildRows(props);
    const onCheckChange = React.useCallback((row: CListRowProps, idx: number) => {
        const newRows = [...props.items];
        newRows[idx] = row.data;
        row.data.isChecked = !row.data.isChecked;
        props.setItems(newRows);
    }, [props.setItems, props.items])


    return <CList rows={checkListRows} startEle={renderStartEle} onPress={onCheckChange} onScroll={props.onScroll} />;
}

function renderStartEle(row: CListRowProps) {
    return <CText style={{ alignSelf: 'center', paddingStart: 5 }}><Icon source={row.data.isChecked ? 'check-circle' : 'checkbox-blank-circle-outline'} size={25} /></CText>
}

function useBuildRows(props: ACheckListProps): CListRowProps[] {
    const rowsForList = React.useMemo(() => {
        return props.items.map(it => ({
            title: <CText style={it.isChecked ? myStyle.checkedItem : {}}>{it.title}</CText>,
            subtitle: <CText style={it.isChecked ? myStyle.checkedItem : {}}>{it.subtitle}</CText>,
            iconName: it.iconName,
            data: it
        }));
    }, [props.items])



    return rowsForList;
}