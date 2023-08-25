import * as S from './styles'
import HeartRight from "../../assets/Icon1.png"

export function Home() {
  return (
    <S.Section>
      
      <fieldset>
        <ul>
          <li>
            <a href="/">Precisa de ajuda?</a>
          </li>
          <li>
            <a href="/">Envie-nos uma mensagem</a>
          </li>
        </ul>
        <div className='Nome'>
          <label for="name"></label>
          <input type="text" name="name" id="name" placeholder="Seu nome" />
        </div>
        <div className='Email'>
          <label for="email"></label>
          <input type="email" name="email" id="email" placeholder="Seu email" required />
        </div>
        <div>
          <label for="sug"></label>
          <textarea name="sug" id="sug" cols="50" rows="25" required placeholder="Mensagem"></textarea>
        </div>
      </fieldset>

      <img src={HeartRight} alt="Coração à direita" />
    </S.Section>
  )
}
