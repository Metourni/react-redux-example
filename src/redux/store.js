import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk"

import cakeReducer from "./cake/reducer";
import sandwichReducer from "./sandwich/reducer";
import dataReducer from "./data/reducer";

const rootReducer = combineReducers({cake: cakeReducer, sandwich: sandwichReducer, serverData: dataReducer});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
