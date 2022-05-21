import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {fetchUsers} from "../../store/action-creators/user";

const StyledMainPage = styled.div` 
  display: flex;
  justify-content: center;
`
const StyledMainPageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  background-color: #d4a9ff;
`

export const MainPage = () => {
  const {users, error, loading} = useTypedSelector(state => state.user)
  const {fetchUsers} = useActions()

  const [username, setSearchValue] = useState('Masha-Gorb')
  const SearchHandler = () => {
    fetchUsers(username)
    setSearchValue('')
  }

  useEffect(() => {
    fetchUsers(username)
  }, [])

  if (loading) {
    return <h1>Идет загрузка...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return <StyledMainPage>
    <StyledMainPageContainer>
      <input
        type="text"
        defaultValue='           Enter GitHub username'
        value={username}
        onChange={(e) => setSearchValue(e.currentTarget.value) }/>
      <button onClick={() => SearchHandler()}>Search</button>

      <h3>
        {users.name}
      </h3>
      <a href={users.htmlUrl}>{users.login}</a>
      <div>{users.followers} followers</div>
      <div>{users.following} following</div>

    </StyledMainPageContainer>
  </StyledMainPage>
}