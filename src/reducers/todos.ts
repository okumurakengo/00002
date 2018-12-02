import { Reducer } from 'redux'

import { todosState } from '../store'
import { actionTypes } from '../actions/action-types'
import { IActions } from '../actions/types'

export default ((state: todosState = [], action: IActions) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        }
      ]
    case actionTypes.TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.payload.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}) as Reducer<todosState>
