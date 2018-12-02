import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import { IState } from '../store'
import { addTodo } from '../actions'
import Addtodo from '../components/Addtodo'
import { IActions } from '../actions/types'

export interface IHandleSubmitArgs {
    e: React.FormEvent<HTMLFormElement>,
    nextTodoId: number,
    input: HTMLInputElement,
}

interface IMapDispatchToProps {
    (dispatch: Dispatch<IActions>): {
        handleSubmit: (handleSubmitArgs: IHandleSubmitArgs) => void
    }
}

const mapDispatchToProps: IMapDispatchToProps = dispatch => ({
    handleSubmit: ({e, nextTodoId, input}) => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(nextTodoId, input.value))
        input.value = ''
    }
})

export default connect(
    ({ nextTodoId }: IState): { nextTodoId: number } => ({ nextTodoId }),
    mapDispatchToProps
)(Addtodo)
  