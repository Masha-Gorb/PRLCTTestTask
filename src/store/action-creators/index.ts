import * as ReposActionCreators from './repos'
import * as UserActionCreators from './user'

const ActionCreators = {
  ...ReposActionCreators,
  ...UserActionCreators
}

export default ActionCreators;