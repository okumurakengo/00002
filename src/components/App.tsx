import * as React from 'react'

import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'

export default () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)
