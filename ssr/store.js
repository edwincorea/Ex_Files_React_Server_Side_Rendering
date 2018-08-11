import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import data from "./data/data.json";

// initial state
const startState = {
    cards: []
};

// actions
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

// reducers
export const reducer = (state = startState, action) => {
    switch (action.type) {
    case "INITIAL_CARDS":
        return {
            cards: action.cards
        };
    case "ADD_ITEM":
        return {
            ...state,
            cards: [...state.cards, action.item]

        };
    default:
        return state;
    }
};

// create store
const thunkEnhancer = applyMiddleware(thunkMiddleware);
const storeEnhancers = composeWithDevTools(thunkEnhancer);
export const initStore = (initialState = startState) => {
    return createStore(reducer, initialState, storeEnhancers);
};