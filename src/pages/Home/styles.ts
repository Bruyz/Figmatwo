import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyle'

export const Section = styled.section`
width: 100%;
display: flex;
justify-content: right;
background-image: url("https://i.pinimg.com/originals/39/aa/d7/39aad72301c118a6793fd2a4b598809a.gif");
background-size: 100%;
fieldset {
    border-color: ${colors.primary};
    background-color: ${colors.thirdLight};
    margin: 10px;
    border-radius: 7%;
    height: 48rem;
}

ul li{
    font-family: 'Courgette', cursive;
    list-style-type: none;
    text-align: center;
}

a{
    text-decoration: none;
    color: ${colors.third};
}

a{

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
