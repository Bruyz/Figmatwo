import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.header`
  /* Cabeçalho */
  display: flex;
  height: 7rem;
  background-color: ${colors.secondary};
  picture {
    margin-left: 0.5rem;
    padding: 1.rem;
    img {
      height: 100%;
    }
  }
`

export const NavBar = styled.nav`
  /* Navegação */
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: right;
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    height: 100%;
    li {
      padding: 1rem;
      height: 100%;
      display: flex;
      align-items: center;
      a {
        text-decoration: none;
        color: ${colors.third};
      }
    }
    li:hover {
      background-color: ${colors.secondaryLight};
    }
  }
`