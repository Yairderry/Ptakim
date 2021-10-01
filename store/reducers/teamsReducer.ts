import { teamsReducerActionTypes } from "../../enums/reducers/teamsReducerActionTypes";
import { IAction } from "../../interfaces/IAction"
import { ITeam } from "../../interfaces/ITeam";
import { v4 as uuidv4 } from 'uuid'
interface IState {
    teams: ITeam[]
}

const initialState: IState = {
    teams: [{
        id: uuidv4(),
        teamName: 'alon',
        score: 0
    },
    {
        id: uuidv4(),
        teamName: 'shahi',
        score: 0
    }]
}

export const teamsReducer = (state: IState = initialState, action: IAction) => {
    switch (action.type) {
        case teamsReducerActionTypes.ADD_NEW_TEAM:
            const { newTeam } = action.payload
            return { ...state, teams: [...state.teams, newTeam] }

        case teamsReducerActionTypes.ADD_NEW_TEAM: {
            const { teamId } = action.payload
            return {
                ...state, teams: state.teams.filter((team: ITeam) => {
                    return team.id !== teamId
                })
            }
        }
        case teamsReducerActionTypes.UPDATE_TEAM_NAME: {
            const { teamId, newTeamName } = action.payload
            return {
                ...state,
                teams: state.teams.map((team: ITeam) => {
                    if (team.id === teamId) {
                        return { ...team, teamName: newTeamName }
                    }
                    return team
                })
            }
        }

        case teamsReducerActionTypes.UPDATE_TEAM_SCORE: {
            const { teamId, isSuccess } = action.payload
            return {
                ...state,
                teams: state.teams.map((team: ITeam) => {
                    if (team.id === teamId) {
                        return { ...team, score: isSuccess ? team.score + 2 : team.score - 1 }
                    }
                    return team
                })
            }
        }
        default:
            return state;
    }
}