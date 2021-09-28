import { teamsReducerActionTypes } from "../../enums/reducers/teamsReducerActionTypes";
import { teamsService } from "../../services/teamsService";

function addNewTeam(teamName: string) {
    const newTeam = teamsService.createNewTeam(teamName)
    const action = {
        type: teamsReducerActionTypes.ADD_NEW_TEAM,
        payload: {
            newTeam
        }
    }
    return action
}

function removeTeam(teamId: string) {
    const action = {
        type: teamsReducerActionTypes.REMOVE_TEAM,
        payload: {
            teamId
        }
    }
    return action
}

function updateTeamName(teamId: string, newTeamName: string) {
    const action = {
        type: teamsReducerActionTypes.UPDATE_TEAM_NAME,
        payload: {
            teamId,
            newTeamName
        }
    }
    return action
}

function updateTeamScore(teamId: string, isSuccess: boolean) {
    const action = {
        type: teamsReducerActionTypes.UPDATE_TEAM_SCORE,
        payload: {
            teamId,
            isSuccess
        }
    }
    return action
}

export const teamsActions = {
    addNewTeam,
    removeTeam,
    updateTeamName,
    updateTeamScore
}