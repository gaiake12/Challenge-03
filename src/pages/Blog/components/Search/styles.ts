import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 4.5rem;

  input {
    border-radius: 8px;
    background: ${(props) => props.theme['base-input']};
    width: 54rem;
    margin-top: 0.9rem;
    height: 3rem;
    color: ${(props) => props.theme['base-label']};
    padding: 0.2rem 1.5rem;
  }
`

export const HeaderContainer = styled.header`
  display: flex;
  width: 57rem;
  justify-content: space-between;
  color: ${(props) => props.theme['base-subtitle']};

  h3 {
    font-size: 1.1rem;
  }

  p {
    color: ${(props) => props.theme['base-span']};
  }
`
