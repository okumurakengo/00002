import { createStore, Store } from 'redux'

import rootReducer from './reducers'
import { VisibilityFiltersEnum } from './actions/types'

export type todosState = Array<{
    id: number;
    text: string;
    completed: boolean;
}>

export interface IState {
    todos: todosState;
    visibilityFilter: VisibilityFiltersEnum;
    nextTodoId: number;
}

export default createStore(rootReducer) as Store<IState>;
