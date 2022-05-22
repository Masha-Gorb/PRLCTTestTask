
import * as ReposActionCreators from './repos'
import * as UserActionCreators from './user'

export default {
  ...ReposActionCreators,
  ...UserActionCreators
}