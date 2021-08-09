import { v4 as uuid4 } from 'uuid'

const getTodosFromLSAction = (todos) => {
    return {
        type: 'todos/getTodosFromLS',
        payload: {
            todos
        }
    }
}
const addTodoAction = (text) => {
    return {
        type: 'todos/addNewTodo',
        payload: {
            id: uuid4(),
            text,
            completed: false
        }
    }
}

const toggleTodoAction = (todoId) => {
    return {
        type: 'todos/toggleTodo',
        payload: {
            todoId
        }
    }
}

const deleteTodoAction = (id) => {
    return {
        type: 'todos/deleteTodo',
        payload: {
            id
        }
    }
}
const editTodoAction = (editId, newText) => {
    return {
        type: 'todos/editTodo',
        payload: {
            editId,
            newText
        }
    }
}

export {
    getTodosFromLSAction,
    addTodoAction,
    toggleTodoAction,
    deleteTodoAction,
    editTodoAction
}