import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.header`
  /* Cabeçalho */
  display: flex;
  height: 7rem;
  background-color: ${colors.thirdLight};

  #divBusca{
  background-color:${colors.secondary};
  border: 2px;
  border-radius:15px;
  height: 50%;
  margin: 2%;
    img{
      display: flex;
      justify-content: left;
    max-width:150px;
    max-height:40px;
    width: auto;
    height: auto;
    align-items: right;
    }
}

#txtBusca{
  float:left;
  background-color:transparent;
  padding-left:5px;
  font-style:italic;
  font-size:18px;
  border:none;
  height:32px;
  width:260px;
}
  picture {
    display: flex;
    align-items: center;
    margin-left: 0.5rem;
    padding: 1.rem;
    img {
      display: flex;
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
    font-family: 'Cookie', cursive;
    font-size: 1.5rem;
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
      background-color: ${colors.secondary};
    }
  }
`