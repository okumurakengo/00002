import { Action } from 'redux'

import { actionTypes } from './action-types'

interface IAction<T, P> extends Action<T> {
    type: T;
    payload: P;
}

export interface IAddTodo { id: number, text: string }
export interface IAddTodoAction {
    (id: number, text: string): IAction<actionTypes.ADD_TODO, IAddTodo>
}

export interface ISetVisibilityFilter { filter: VisibilityFiltersEnum }
export interface ISetVisibilityFilterAction {
    (filter: VisibilityFiltersEnum): IAction<actionTypes.SET_VISIBILITY_FILTER, ISetVisibilityFilter>
}

export interface IToggleTodo { id: number }
export interface IToggleTodoAction {
    (id: number): IAction<actionTypes.TOGGLE_TODO, IToggleTodo>
}

export type IActions = IAction<actionTypes.ADD_TODO, IAddTodo>
                     | IAction<actionTypes.SET_VISIBILITY_FILTER, ISetVisibilityFilter>
                     | IAction<actionTypes.TOGGLE_TODO, IToggleTodo>

export enum VisibilityFiltersEnum {
    SHOW_ALL,
    SHOW_COMPLETED,
    SHOW_ACTIVE,
}
