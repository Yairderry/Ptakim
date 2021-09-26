import { gameLoopReducerActionTypes } from "../../enums/reducers/gameLoopReducerActionTypes";
import { gameLoopService } from "../../services/gameLoopService";

function initGameLoop() {
    const words = gameLoopService.getWords(5)
    const action = {
        type: gameLoopReducerActionTypes.INIT_GAME_LOOP,
        payload: {
            words
        }
    }
    return action
}

function updateWordStatus(wordId: string) {
    const action = {
        type: gameLoopReducerActionTypes.UPDATE_WORD_STATUS,
        payload: {
            wordId
        }
    }
    return action
}

function moveLevelUp() {
    const action = {
        type: gameLoopReducerActionTypes.LEVEL_UP,
        payload: {}
    }
    return action
}

function toggleGameStatus(status: boolean) {
    const action = {
        type: gameLoopReducerActionTypes.TOGGLE_GAME_STATUS,
        payload: {
            status
        }
    }
    return action
}

export const gameLoopActions = {
    initGameLoop,
    updateWordStatus,
    moveLevelUp,
    toggleGameStatus
}