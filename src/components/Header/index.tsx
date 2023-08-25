import * as S from "./styles"
import Logo from "../../assets/Logo.png"
import Lupa from "../../assets/lupa.png"

export function Header() {
  return (
    <S.Header>
      <div id="divBusca">
        <input type="text" id="txtBusca" placeholder="Buscar..." />
        <img src={Lupa} id="btnBusca" alt="Buscar" />
      </div>
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