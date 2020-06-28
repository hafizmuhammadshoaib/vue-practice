import { todoState, todoMutations } from "./mutations"
import { todoActions } from "./actions"

export default {
    state: todoState,
    actions: todoActions,
    mutations: todoMutations
}