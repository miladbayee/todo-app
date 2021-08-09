const selectFilterTodosSilce = (state) => {
    const todos = Object.values(state.todos.todos)
    const { status } = state.filters

    const showAll = status === 'all'
    if (showAll) {
        return todos
    }

    const showCompleted = status === 'completed'
    return todos.filter(todo => {
        const statusFiltersTodo = showAll || todo.completed === showCompleted
        return statusFiltersTodo
    })

}
export default selectFilterTodosSilce