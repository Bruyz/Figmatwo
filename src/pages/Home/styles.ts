import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyle'

export const Section = styled.section`
width: 100%;
display: flex;
justify-content: right;

fieldset {
    border-color: ${colors.primary};
    background-color: ${colors.secondary};
    margin: 10px;
}

div{
    width: 100%;
    display: flex;    
}
/* Form */

div.Nome{
    height: 5.5%;
    margin: 5.5px;
}

div.Email{
    height: 5.5%;
    margin: 5.5px;
}

img{
    align-items: right;
    width: 50rem;
     height: 45rem;
    }
`
