import styled from 'styled-components'

export const ProfileContainer = styled.div`
  margin: 0 auto;
  margin-top: -5rem;
  width: 54rem;
  height: 9rem;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 8px;
  padding: 2.5rem;
  display: flex;
  gap: 1.5rem;
  font-family: 'Nunito', sans-serif;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;

    h1 {
      font-weight: bold;
      color: ${(props) => props.theme['base-title']};
      font-size: 1.5rem;
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.blue};
    }
  }
`

export const TextContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${(props) => props.theme['base-text']};

  p {
    line-height: 160%;
  }
`

export const FooterPostContainer = styled.footer`
  display: flex;
  gap: 2rem;

  svg {
    padding: 0 0.25rem 0 0;
    color: ${(props) => props.theme['base-label']};
  }
`
