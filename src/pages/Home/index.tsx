import * as S from './styles'
import HeartRight from "../../assets/Icon1.png"

export function Home() {
  return (
    <S.Section>

      <fieldset>
        <legend></legend>
        <div>
          <label for="name"></label>
          <input type="text" name="name" id="name" placeholder="Seu nome"/>
        </div>
        <div>
          <label for="email"></label>
          <input type="email" name="email" id="email" placeholder="Seu email" required/>
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
