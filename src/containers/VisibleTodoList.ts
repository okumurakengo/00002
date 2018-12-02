import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import { IState } from '../store'
import { toggleTodo } from '../actions'
import { todosState } from '../store'
import TodoList from '../components/TodoList'
import { IActions, VisibilityFiltersEnum } from '../actions/types'

interface IMapStateToProps {
  (state: IState): { todos: todosState }
}

interface IMapDispatchToProps {
  (dispatch: Dispatch<IActions>): {
    toggleTodo: (id: number) => void
  }
}

const getVisibleTodos = (
  todos: todosState,
  filter: VisibilityFiltersEnum
): todosState => {
  switch (filter) {
    case VisibilityFiltersEnum.SHOW_ALL:
      return todos
    case VisibilityFiltersEnum.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFiltersEnum.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps: IMapStateToProps = ({ todos, visibilityFilter }) => ({
  todos: getVisibleTodos(todos, visibilityFilter)
})

const mapDispatchToProps: IMapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
