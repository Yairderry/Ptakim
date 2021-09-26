import { GameLevels } from "../../enums/levels";
import { gameLoopReducerActionTypes } from "../../enums/reducers/gameLoopReducerActionTypes";
import { IAction } from "../../interfaces/IAction"
import { IWord } from "../../interfaces/IWord";

interface IState {
    roundTime: number,
    words: IWord[],
    isGameOn: boolean,
    currentLevel: GameLevels
}

const initialState: IState = {
    roundTime: 60,
    words: [],
    isGameOn: false,
    currentLevel: GameLevels.FIRST_ROUND
}

export const gameLoopReducer = (state: IState = initialState, action: IAction) => {
    switch (action.type) {

        case gameLoopReducerActionTypes.INIT_GAME_LOOP:
            const { words } = action.payload
            return { ...state, words }

        case gameLoopReducerActionTypes.UPDATE_WORD_STATUS:
            const { wordId } = action.payload
            return {
                ...state, words: words.map((word: IWord) => {
                    if (word.id === wordId) {
                        return { ...word, status: true }
                    }
                    return word
                })
            }

        case gameLoopReducerActionTypes.LEVEL_UP:
            switch (state.currentLevel) {
                case GameLevels.FIRST_ROUND:

                    return {
                        ...state, currentLevel: GameLevels.SECOND_ROUND, words: state.words.map((word: IWord) => {
                            return { ...word, status: false }
                        })
                    }
                case GameLevels.SECOND_ROUND:

                    return {
                        ...state, currentLevel: GameLevels.THIRD_ROUND, words: state.words.map((word: IWord) => {
                            return { ...word, status: false }
                        })
                    }
                case GameLevels.THIRD_ROUND:
                    return
                default:
                    break;
            }

        case gameLoopReducerActionTypes.TOGGLE_GAME_STATUS:
            const { status } = action.payload
            return { ...state, isGameOn: status }

        default:
            return state;
    }
}