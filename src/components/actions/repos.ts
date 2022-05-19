import axios from "axios";
import {setReposAC} from "../../reducers/ReposReducer";

export const getRepos = (searchQuery = '') => {
  return async (dispatch: any) => {
    const response = await axios.get("https://api.github.com/search/repositories?q=${searchQuery}")
    dispatch(setReposAC(response.data))
  }
}