import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

interface IProps {
    onSaveTeam: (newteamName: string) => void
}

export const NewTeamBox: React.FC<IProps> = ({ onSaveTeam }) => {

    const [newteamName, setNewteamName] = useState('')

    const onSave = (): void => {
        onSaveTeam(newteamName)
    }

    return (
        <View>
            <TextInput value={newteamName} onChangeText={setNewteamName} />
        </View>
    )
}

const styles = StyleSheet.create({})
