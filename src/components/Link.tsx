import * as React from 'react'

interface IProps {
  active: boolean;
  onClick: () => void
}

export default (
  ({ active, children, onClick }) => (
    <button
       onClick={onClick}
       disabled={active}
       style={{
           marginLeft: '4px',
       }}
    >
      {children}
    </button>
  )
) as React.SFC<IProps>
