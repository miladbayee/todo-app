const initState = {
    todos: {}
}
const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todos/getTodosFromLS':
            return {
                ...state,
                todos: action.payload.todos
            }
        case 'todos/addNewTodo':
            const { id, text } = action.payload
            return {
                ...state,
                todos: { ...state.todos, [id]: { ...action.payload, text } }
            }
        case 'todos/toggleTodo':
            const { todoId } = action.payload
            return {
                ...state,
                todos: {
                    ...state.todos,
                    [todoId]: { ...state.todos[todoId], completed: !state.todos[todoId].completed }
                }
            }
        case 'todos/deleteTodo':
            delete state.todos[action.payload.id]
            return {
                state,
                todos: { ...state.todos }
            }
        case 'todos/editTodo':
            const { editId, newText } = action.payload
            return {
                ...state,
                todos: { ...state.todos, [editId]: { ...state.todos[editId], text: newText } }
            }

        default:
            return state;
    }
}
export default todoReducer