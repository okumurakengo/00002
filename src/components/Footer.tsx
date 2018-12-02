import * as React from 'react'

import FilterLink from '../containers/FilterLink'
import { VisibilityFiltersEnum } from '../actions/types'

export default () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFiltersEnum.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFiltersEnum.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={VisibilityFiltersEnum.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </div>
)
