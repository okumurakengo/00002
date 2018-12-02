import { combineReducers } from 'redux'

import { actionTypes } from '../actions/action-types'
import { IActions } from '../actions/types'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todos,
  visibilityFilter,
  nextTodoId: (state: number = 0, action: IActions) => {
    return (action.type === actionTypes.ADD_TODO) ? ++state : state
  }
})
