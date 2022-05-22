import {UserAction, UserActionTypes, UserState} from "../../types/user";

const initialState: UserState = {
  users: {
    name: '',
    login: '',
    htmlUrl: '',
    avatar_url: '',
    followers: 0,
    following: 0
  },
  loading: false,
  error: null
}

// внимание на юзерс в 13 и 17 строках
export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return {
        loading: true, error: null, users: {
          name: '',
          login: '',
          htmlUrl: '',
          avatar_url: '',
          followers: 0,
          following: 0
        }
      }
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return {loading: false, error: null, users: action.payload}
    case UserActionTypes.FETCH_USERS_ERROR:
      return {
        loading: false, error: action.payload, users: {
          name: '',
          login: '',
          htmlUrl: '',
          avatar_url: '',
          followers: 0,
          following: 0
        }
      }
    default:
      return state
  }
}
