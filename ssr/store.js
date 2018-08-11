import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import data from "./data/data.json";

// initial state
const startState = {
    cards: []
};

// Actions
export const initialCards = () => {
    return {
        type: "INITIAL_CARDS",
        cards: data
    };
};

export const addItem = (item) => {
    return {
        type: "ADD_ITEM",
        item
    };
};

// create store
const thunkEnhancer = applyMiddleware(thunkMiddleware);
const storeEnhancers = composeWithDevTools(thunkEnhancer);
const reducer = () => ([]);
export const initStore = (initialState = startState) => {
    return createStore(reducer, initialState, storeEnhancers);
};