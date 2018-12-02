import * as React from 'react'

import { IHandleSubmitArgs } from '../containers/AddTodo'

interface IProps {
  nextTodoId: number;
  handleSubmit: (handleSubmitArgs: IHandleSubmitArgs) => void;
}

export default (
  ({ nextTodoId, handleSubmit }) => {
    let input: HTMLInputElement;

    return (
      <div>
        <form onSubmit={e => handleSubmit({e, nextTodoId, input})}>
          <input ref={node => input = node} />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    )
  }
) as React.SFC<IProps>
