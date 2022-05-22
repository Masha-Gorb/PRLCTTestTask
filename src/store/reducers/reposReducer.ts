import {ReposAction, ReposActionTypes, ReposState} from "../../types/repos";

const initialState: ReposState = {
  repos: [],
  page: 1,
  error: null,
  per_page: 5,
  loading: false
}

export const reposReducer = (state = initialState, action: ReposAction): ReposState => {
  switch (action.type) {
    case ReposActionTypes.FETCH_REPOS:
      return {...state, loading: true}
    case ReposActionTypes.FETCH_REPOS_SUCCESS:
      return {...state, loading: false, repos: action.payload}
    case ReposActionTypes.FETCH_REPOS_ERROR:
      return {...state, loading: false, error: action.payload}
    case ReposActionTypes.SET_REPOS_PAGE:
      return {...state, page: action.payload}
    default:
      return state
  }
}