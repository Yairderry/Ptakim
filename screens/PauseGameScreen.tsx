import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { ITeam } from '../interfaces/ITeam'

interface IProps {
    onResetGame: (() => void) | null ;
    onCountinue: () => void;
    teams: ITeam[]
}
export const PauseGameScreen: React.FC<IProps> = ({ onResetGame, onCountinue, teams }) => {
    return (
        <View>
            {
                teams.map(team => {
                    return (<View key={team.id}>
                        <Text>{team.teamName}</Text>
                        <Text>{team.score}</Text>
                    </View>)
                })
            }
            {/* <Button title="new game" onPress={() => onResetGame()}></Button> */}
            <Button title="countinue" onPress={() => onCountinue()}></Button>
        </View>
    )
}

const styles = StyleSheet.create({})
