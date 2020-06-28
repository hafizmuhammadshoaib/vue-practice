export const todoState = () => ({
    todos: [],
})
export const todoMutations = {
    add(state, { todo }) {
        state.todos.push(todo)
    }
}