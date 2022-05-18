import githubLogoWhite from '../asserts/githubLogoWhite.svg'
import styled from "styled-components";

const StyledLogo = styled.div`
  margin-right: 22px;
  height: 40px;
`

export const Logo = () => {
  return <StyledLogo>
  <img alt={'logo'} src={githubLogoWhite}/>
  </StyledLogo>
}