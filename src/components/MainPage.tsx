import React, { useState} from 'react';
import styled from "styled-components";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Logo} from "./Logo";

const StyledMainPage = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  background-color: #E5E5E5;
`
const StyledMainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 90%;
  height: 800px;
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
const StyledImg = styled.img` 
  border-radius: 50%;
  height: 300px;
  width: 300px;
  margin-top: 40px;
`

export const MainPage = () => {
  const {users, error, loading} = useTypedSelector(state => state.user)
  const {fetchUsers} = useActions()

  const [username, setSearchValue] = useState('')
  const SearchHandler = () => {
    fetchUsers(username)
    setSearchValue('')
  }

  if (loading) {
    return <h1>Идет загрузка...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
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
      <button onClick={() => SearchHandler()}>
        Search
      </button>
    </StyledHeader>


    <StyledMainPageContainer>
      <StyledImg src={users.avatar_url}/>
      <h3>
        {users.name}
      </h3>
      <a href={users.htmlUrl}>{users.login}</a>
      <div>{users.followers} followers</div>
      <div>{users.following} following</div>
    </StyledMainPageContainer>

  </StyledMainPage>
}