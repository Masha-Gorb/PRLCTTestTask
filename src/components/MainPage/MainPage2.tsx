import React, {ChangeEvent, useEffect, useState} from 'react';
import styled from "styled-components";
import axios from "axios";


const StyledMainPage = styled.div` 
  display: flex;
  justify-content: center;
`
const StyledMainPageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  background-color: #bc78ff;
`

export const MainPage2 = () => {

  const [searchValue, setSearchValue] = useState('')
  const [inputResult, setInputResult] = useState('')
  const SearchOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value)
  }
  const SearchHandler = () => {
    setInputResult(searchValue)
  }

  let searchUserName = inputResult

  const [state, setState] = useState<any>(null)
  useEffect((username = searchUserName) => {
    axios.get(`https://api.github.com/users/${username}`)
      .then((res) => {
        setState(res.data.name);
      })
  }, [])


  return <StyledMainPage>
    <StyledMainPageContainer>
      <input type="text"
             value={searchValue}
             onChange={SearchOnChangeHandler}/>
      <button onClick={() => SearchHandler()}>Search</button>

      <div>
        {JSON.stringify(state)}
      </div>

    </StyledMainPageContainer>
  </StyledMainPage>
}