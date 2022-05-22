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
  width: 870px;
  margin-top: 24px;
`

export const Repos = (props: ReposPropsType) => {
  const {page, loading, repos, per_page} = useTypedSelector(state => state.repos)
  const {fetchRepos, setReposPage} = useActions()
  const pages = [1, 2, 3, 4, 5]

  const username = props.username
  useEffect(() => {
    fetchRepos(page, per_page, username)
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
      <div style={{display: "flex"}}>
        {pages.map(p =>
          <div
            onClick={() => setReposPage(p)}
            style={{border:p === page ? '2px solid green' : '1px solid gray', padding: 10}}
          >
            {p}
          </div>
        )}
      </div>
    </StyledReposPageContainer>
  );
};
