import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { settingsReducer, ptakimReducer, gameLoopReducer } from "./reducers";

const rootReducer = combineReducers({
    settingsReducer, ptakimReducer, gameLoopReducer
})

const middlewares = [thunk]

export const store = createStore(rootReducer, {}, applyMiddleware(...middlewares))