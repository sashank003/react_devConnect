import { SET_ALERT, REMOVE_ALERT } from '../action/types';
const initialState = [];

export default function alert(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case SET_ALERT:
            return [...state, payload];
        case REMOVE_ALERT:
            return state.filter(Alert => Alert.id !== payload)
        default:
            return state;

    }
}