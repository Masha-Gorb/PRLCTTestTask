import React, {useState} from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {fetchUsers} from "../store/action-creators/user";

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

export const SearchInput = () => {
  const [username, setSearchValue] = useState('')
  const SearchHandler = () => {
    setSearchValue('')
    // @ts-ignore
    fetchUsers(username)
  }

  return (
    <div>
      <StyledInput
        type="text"
        defaultValue='           Enter GitHub username'
        value={username}
        onChange={(e) => setSearchValue(e.currentTarget.value) }
      />
      <button onClick={() => SearchHandler()}>Search</button>
    </div>
  )
}