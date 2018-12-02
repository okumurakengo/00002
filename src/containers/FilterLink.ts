import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import { IState } from '../store'
import { setVisibilityFilter } from '../actions'
import { IActions, VisibilityFiltersEnum } from '../actions/types'
import Link from '../components/Link'

interface IFilter {
  filter: VisibilityFiltersEnum
}

interface IMapStateToProps {
  (state: IState, ownProps: IFilter): { active: boolean }
}

interface IMapDispatchToProps {
  (dispatch: Dispatch<IActions>, ownProps: IFilter): {
    onClick: () => void
  }
}

const mapStateToProps: IMapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps: IMapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
