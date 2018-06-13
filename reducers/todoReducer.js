import { ADD_TODO, SHOW_ALL, DELETE_TODO, EDIT_TODO } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {

            }
        default:
            return state;
    }
}