import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyle'

export const Section = styled.section`
padding: 5%;
  display: grid;
  grid-template-columns: auto auto;
  
  h1{
    font-size: 100%;
    padding: 5%;
    color: ${colors.third};
  } 

  @media (max-width: 1010px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 768px) {
    grid-template-columns: auto auto;
    font-size: 0.9rem;
  }
  @media (max-width: 500px) {
    grid-template-columns: auto;
  }
`
