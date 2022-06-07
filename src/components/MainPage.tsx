import React from 'react';
import styled from "styled-components";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {ErrorPage} from "./ErrorPage";
import {UserPage} from "./UserPage";
import {Repos} from "./Repos";
import {StartPage} from "./StartPage";

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
export const MainPage = () => {
  const {users, error, loading} = useTypedSelector(state => state.user)

  if (loading) {
    return <h1>Идет загрузка...</h1>
  }
  if (error) {
    return <ErrorPage error={error}/>
  }
  if (users.login === '') {
    return <StartPage/>
  }

  return <StyledMainPage>

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