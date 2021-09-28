import React from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { View, Text } from 'react-native'
import { ITeam } from '../interfaces/ITeam'
import { TeamPreview } from './TeamPreview'

interface IProps {
    teams: ITeam[]
}


export const TeamsList: React.FC<IProps> = ({ teams }) => {

    return (<>
        {teams.length ? <View style={styles.listWrapper}>
            {teams.map((team: ITeam) => {
                <TeamPreview team={team} />
            })}
        </View> :
            <Text>Create the first team!</Text>}
    </>
    )
}

const styles = StyleSheet.create({
    listWrapper: {
        flex: 1
    }
})
