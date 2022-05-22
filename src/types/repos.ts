export interface ReposState {
  repos: any[];
  loading: boolean;
  error: null | string;
  page: number;
  per_page: number;
}

export enum ReposActionTypes {
  FETCH_REPOS= 'FETCH_REPOS',
  FETCH_REPOS_SUCCESS= 'FETCH_REPOS_SUCCESS',
  FETCH_REPOS_ERROR= 'FETCH_REPOS_ERROR',
  SET_REPOS_PAGE = 'SET_REPOS_PAGE'
}
interface FetchReposAction {
  type: ReposActionTypes.FETCH_REPOS
}
interface FetchReposSuccessAction {
  type: ReposActionTypes.FETCH_REPOS_SUCCESS;
  payload: any[];
}
interface FetchReposErrorAction {
  type: ReposActionTypes.FETCH_REPOS_ERROR;
  payload: string;
}
interface SetReposPage {
  type: ReposActionTypes.SET_REPOS_PAGE;
  payload: number;
}

export type ReposAction =
  FetchReposAction
  | FetchReposErrorAction
  | FetchReposSuccessAction
  | SetReposPage