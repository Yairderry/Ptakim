import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ITeam } from '../interfaces/ITeam'

interface IProps {
    team: ITeam
}

export const TeamPreview: React.FC<IProps> = ({ team }) => {

    const isEditing = useState(false)

    return (
        <View>
            <Text>{team.teamName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#F5F8FF"
    }
})
