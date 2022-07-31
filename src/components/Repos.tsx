import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import styled from "styled-components";

type ReposPropsType = {
  username: string
  reposCount: number
}

const StyledReposPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`
const StyledOneRepoContainer = styled.div`
  background-color: white;
  width: 700px;
  margin-top: 24px;
  @media (max-width: 320px) {
    width: 300px;
  }
  @media (max-width: 425px) {
    width: 300px;
    margin-left: 10px;
  }
`

export const Repos = (props: ReposPropsType) => {
  const {loading, repos} = useTypedSelector(state => state.repos)
  const {fetchRepos} = useActions()

  const username = props.username
  useEffect(() => {
    fetchRepos(username)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return <h1>Идет загрузка...</h1>
  }
  return (
    <StyledReposPageContainer>
      <h1>Repositories ({props.reposCount})</h1>
      {repos.map(repo =>
        <StyledOneRepoContainer key={repo.id}>
          <h3><a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a></h3>
          <span>{repo.description}</span>
        </StyledOneRepoContainer>
      )}
    </StyledReposPageContainer>
  );
};
