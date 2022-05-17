import React from 'react';
import styled from "styled-components";
import {SearchInput} from "./SearchInput";
import {Logo} from "./Logo";
const StyledHeader = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  background-color: #0064EB;
  justify-content: center;
  align-items: center;
`

export const Header = () => {
  return (
    <StyledHeader>
      <Logo/>
      <SearchInput/>
    </StyledHeader>
  )
}