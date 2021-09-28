import React, { useState } from 'react'
import { Button, Platform, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { v4 as uuidv4 } from 'uuid';
import { TeamsList } from '../components/TeamsList';
import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native';

export const GameConfigScreen = () => {

    const teams = useSelector((state: any) => state.teamsReducer.teams)
    const [isAddingTeam, setIsAddingTeam] = useState(false)

    const toggleAddTeam = () => {
        setIsAddingTeam(!isAddingTeam)
    }

    return (
        <View style={styles.wrapper}>
            <Text>Game configuration</Text>
            <TeamsList teams={teams} />
            <TouchableOpacity style={styles.addTeamBtn} onPress={toggleAddTeam}>
                <Text style={styles.addTeamBtnText}>{isAddingTeam ? 'Cancel' : 'Add a team +'}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    addTeamBtn: {
        backgroundColor: "#F5F8FF",
        paddingVertical: 16
    },
    addTeamBtnText: {
        fontSize: 30,
        textAlign: 'center'
    }
})

