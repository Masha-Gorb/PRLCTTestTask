import {combineReducers} from "redux";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk"
import {userReducer} from "./reducers/userReducer";
import {reposReducer} from "./reducers/reposReducer";

const rootReducer = combineReducers({
 user: userReducer,
 repos: reposReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof rootReducer>
