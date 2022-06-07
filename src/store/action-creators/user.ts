import {UserAction, UserActionTypes} from "../../types/user";
import {Dispatch} from "redux";
import axios from "axios";

export const getUsers = (username: string) => {
  if (username === '') {
    username = 'gaearon'
  }
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({type: UserActionTypes.FETCH_USERS})
      const response = await axios.get(`https://api.github.com/users/${username}`)
      if (response.status === 200) {
        dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
      }
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: 'User not found'
      })
    }
  }
}