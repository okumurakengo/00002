import * as React from 'react'

import { todosState } from '../store'
import Todo from './Todo'

interface IProps {
  todos: todosState;
  toggleTodo: (id: number) => void
}

export default (
  ({ todos, toggleTodo }) => (
    <ul>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => toggleTodo(todo.id)}
        />
      )}
    </ul>
  )
) as React.SFC<IProps>
