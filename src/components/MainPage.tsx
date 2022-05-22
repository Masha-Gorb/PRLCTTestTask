import React, { useState} from 'react';
import styled from "styled-components";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Logo} from "./Logo";
import {ErrorPage} from "./ErrorPage";
import {UserPage} from "./UserPage";
import {Repos} from "./Repos";

const StyledMainPage = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: #E5E5E5;
`
const StyledMainPageContainer = styled.div` 
  display: flex;
  align-items: start;
  width: 100%;
`

const StyledHeader = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  background-color: #0064EB;
  justify-content: center;
  align-items: center;
`
const StyledInput = styled.input`
  margin-right: 762px;
  width: 500px;
  height: 40px;
  background: #FFFFFF;
  border-radius: 6px;
  border-color: rgba(255, 255, 255, 0);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #808080;
`

export const MainPage = () => {
  const {users, error, loading} = useTypedSelector(state => state.user)
  const {getUsers} = useActions()

  const [username, setSearchValue] = useState('')
  const SearchHandler = () => {
    getUsers(username)
    setSearchValue('')
  }

  if (loading) {
    return <h1>Идет загрузка...</h1>
  }
  if (error) {
    return <ErrorPage error={error}/>
  }

  return <StyledMainPage>

    <StyledHeader>
      <Logo/>
      <StyledInput
      type="text"
      placeholder='           Enter GitHub username'
      value={username}
      onChange={(e) => setSearchValue(e.currentTarget.value) }
      onKeyPress={(e) => {if (e.charCode === 13) {SearchHandler()}}}/>
    </StyledHeader>

    <StyledMainPageContainer>
      <UserPage
        name={users.name}
        login={users.login}
        loginUrl={users.html_url}
        avatar={users.avatar_url}
        followers={users.followers}
        following={users.following}
      />

      <Repos
        username={users.login}
        reposCount={users.public_repos}
      />
    </StyledMainPageContainer>


  </StyledMainPage>
}