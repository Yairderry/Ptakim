import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface IProps {
    word: string;
}
export const Note: React.FC<IProps> = ({ word }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.word}>{word}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 8,
        padding: 40
    },
    word: {
        color: '#fff',
        width: '100%',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
})
