
const SET_REPOS = "SET_REPOS"

export type StateType = {

  isFetching: boolean,
  items: Array<any>
}
const defaultState = {
  items: [],
  isFetching: true,
}

export const reposReducer = (state:StateType = defaultState, action: any) => {
  switch (action.type) {
    case SET_REPOS:
      return {
        ...state,
      items: action.payload.items
      }
    default:
      return state
  }
}

export const setReposAC = (repos: any) => ({type:SET_REPOS, payload: repos})