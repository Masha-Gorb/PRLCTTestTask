import React from 'react';
import styled from "styled-components";
import SearchIcon from "../asserts/SearchIcon.svg";

const StyledStartPageIcon = styled.div`
  
  position: absolute;
  margin-top: 190px;
  left: 20.83%;
  right: 20.83%;
  top: 20.83%;
  bottom: 20.83%;
`
const StyledStartPageText = styled.h2`
  position: absolute;
  height: 62px;
  left: 42.31%;
  right: 42.31%;
  top: calc(50% - 62px/2 + 67px);

  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 140%;
  text-align: center;
  color: #808080;
`

export const StartPage = () => {
  return <>
    <StyledStartPageIcon>
      <img alt={'icon'} src={SearchIcon}/>
      </StyledStartPageIcon>
    <StyledStartPageText>Start with searching a GitHub user</StyledStartPageText>

  </>
}