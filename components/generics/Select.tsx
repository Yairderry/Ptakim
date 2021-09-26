import React from 'react'
import { StyleSheet, View } from 'react-native'

interface IItem {
    label: string,
    id: string
}

interface IProps {
    placeholder: string,
    isOpen: boolean,
    items: IItem[],
    onSelect: Function
}


export const Select: React.FC<IProps> = ({ isOpen, items, onSelect }) => {
    return (
        <View style={styles.wrapper}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        height: 50
    }
})
