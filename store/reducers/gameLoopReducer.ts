import { IAction } from "../../interfaces/IAction"

const initialState = {}

export const gameLoopReducer = (state = initialState, action: IAction) => {
    switch (action.type) {

        default:
            return state;
    }
}