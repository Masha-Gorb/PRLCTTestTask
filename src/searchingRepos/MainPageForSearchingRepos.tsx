import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "./actions/repos";
import {Repo} from "./Repo/Repo";

const StyledMainPage = styled.div` 
  display: flex;
  justify-content: center;
`
const StyledMainPageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  background-color: #a1e6ff;
`

export const MainPage = () => {
  // @ts-ignore
  const repos = useSelector(state => state.repos.items)
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState('')
  const SearchHandler = () => {
    alert(searchValue)
    console.log(repos)
    setSearchValue('')
    // @ts-ignore
    dispatch(getRepos(searchValue))
  }
  useEffect(() => {
    // @ts-ignore
    dispatch(getRepos())
  }, [])

  return <StyledMainPage>
    <StyledMainPageContainer>
      here will be main page content
      <input type="text"
             defaultValue='           Enter GitHub username'
             value={searchValue}
             onChange={(e) => setSearchValue(e.currentTarget.value) }/>
      <button onClick={() => SearchHandler()}>Search</button>

      <div>
        {repos.map((repos:any) =>
          <Repo repo={repos}/>)}
      </div>

    </StyledMainPageContainer>
  </StyledMainPage>
}