import React from "react";
import styled from "styled-components";

type UserPagePropsType = {
  name: string
  login: string
  loginUrl: string
  avatar: string
  followers: number
  following: number
}
const StyledUserPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`
const StyledUserPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 85%;
  height: 800px;
  margin-left: 300px;
`
const StyledImg = styled.img`   
  border-radius: 50%;
  height: 280px;
  width: 280px;
  margin-top: 40px; 
`

export const UserPage = (props: UserPagePropsType) => {
  return <StyledUserPage>
    <StyledUserPageContainer>
      <StyledImg src={props.avatar}/>
      <h3>
        {props.name}
      </h3>
      <a href={props.loginUrl} target="_blank" rel="noreferrer">{props.login}</a>
      <div>{props.followers} followers</div>
      <div>{props.following} following</div>
    </StyledUserPageContainer>
  </StyledUserPage>

}