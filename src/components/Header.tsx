import styled from "styled-components";
import {Logo} from "./Logo";
import React, {useState} from "react";
import {useActions} from "../hooks/useActions";

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
  @media (max-width: 320px) {
    width: 200px;
    margin-right: 10px;
  }
`

export const Header = () => {

  const [username, setSearchValue] = useState('')
  const {getUsers} = useActions()
  const SearchHandler = () => {
    getUsers(username)
    setSearchValue('')
  }

  return (
    <div>
      <StyledHeader>
        <Logo/>
        <StyledInput
          type="text"
          placeholder='           Enter GitHub username'
          value={username}
          onChange={(e) => setSearchValue(e.currentTarget.value) }
          onKeyPress={(e) => {if (e.charCode === 13) {SearchHandler()}}}/>
      </StyledHeader>
    </div>
  )
}