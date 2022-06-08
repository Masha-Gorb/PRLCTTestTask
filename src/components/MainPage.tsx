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
  @media (max-width: 425px) {
    flex-direction: column;
    justify-content: space-between;
  }
`
const StyledMainPageContainer = styled.div`
  display: flex;
  align-items: start;
  width: 100%;
  @media (max-width: 425px) {
    flex-direction: column;
    align-items: start;
  }
`
const StyledLoader = styled.div`
  margin-left: 600px;
  margin-top: 200px;
  border: 16px solid #f3f3f3; 
  border-top: 16px solid #3498db; 
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite; 
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`
export const MainPage = () => {
  const {users, error, loading} = useTypedSelector(state => state.user)

  if (loading) {
    return <StyledLoader>Идет загрузка...</StyledLoader>
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