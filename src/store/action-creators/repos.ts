import {Dispatch} from "redux";
import axios from "axios";
import {ReposAction, ReposActionTypes} from "../../types/repos";

export const fetchRepos = (username: string) => {
  return async (dispatch: Dispatch<ReposAction>) => {
    try {
      dispatch({type: ReposActionTypes.FETCH_REPOS})
      const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
        params: {_username: username}
      })
      setTimeout(() => {
        dispatch({type: ReposActionTypes.FETCH_REPOS_SUCCESS, payload: response.data})
      }, 500)
    } catch (e) {
      dispatch({
        type: ReposActionTypes.FETCH_REPOS_ERROR,
        payload: 'Произошла ошибка'
      })
    }
  }
}
export function setReposPage(page: number): ReposAction {
  return {type: ReposActionTypes.SET_REPOS_PAGE, payload: page}
}