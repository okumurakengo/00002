import * as React from 'react'

interface IProps {
  completed: boolean;
  text: string;
  onClick: () => void
}

export default (
  ({ onClick, completed, text }) => (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </li>
  )
) as React.SFC<IProps>
