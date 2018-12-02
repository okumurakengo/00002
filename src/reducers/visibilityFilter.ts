import { Reducer } from 'redux'

import { actionTypes } from '../actions/action-types'
import { IActions, VisibilityFiltersEnum } from '../actions/types'

export default ((state = VisibilityFiltersEnum.SHOW_ALL, action: IActions) => {
  switch (action.type) {
    case actionTypes.SET_VISIBILITY_FILTER:
      return action.payload.filter
    default:
      return state
  }
}) as Reducer<VisibilityFiltersEnum>
