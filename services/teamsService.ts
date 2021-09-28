import { ITeam } from "../interfaces/ITeam";
import { v4 as uuidv4 } from 'uuid';

function createNewTeam(teamName: string): ITeam {
    return {
        teamName,
        score: 0,
        id: uuidv4()
    }
}

export const teamsService = {
    createNewTeam
}