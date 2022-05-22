import {Dispatch} from "redux";
import axios from "axios";
import {ReposAction, ReposActionTypes} from "../../types/repos";

export const fetchRepos = (page = 1, per_page = 5, username: string) => {
  return async (dispatch: Dispatch<ReposAction>) => {
    try {
      dispatch({type: ReposActionTypes.FETCH_REPOS})
      const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
        params: {_page: page, _per_page: per_page, _username: username}
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