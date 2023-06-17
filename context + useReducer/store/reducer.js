import { SET_ACTION, ADD_ACTION, DELETE_ACTION } from './constants'
const initState = {
    todos: [],
    todoInput: ''
}

function reducer(state, action) {
    switch (action.type) {
        case SET_ACTION:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_ACTION:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_ACTION:
            const newTodos = [...state.todos]
            newTodos.splice(action.payload, 1)
            return {
                ...state,
                todos: newTodos
            }
        default:
            throw new Error('Invalid')
    }
}

export { initState }
export default reducer