import { ADD_TODO, DELETE_TODO, EDIT_TODO } from './types';

export const fetchTodos = () => dispatch =>{
    fetch('../todos')
        .then(res => res.json())
        .then(todos =>
            dispatch({
                type: ADD_TODO,
                todos: todos
            })
        );
}