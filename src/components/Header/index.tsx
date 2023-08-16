import * as S from "./styles"
import Logo from "../../assets/Logo.png"

export function Header() {
  return (
    <S.Header>
      <picture>
        <img src={Logo} alt="Logo" />
      </picture>
      <S.NavBar>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/list">About</a>
          </li>
        </ul>
      </S.NavBar>
    </S.Header>
  )
}