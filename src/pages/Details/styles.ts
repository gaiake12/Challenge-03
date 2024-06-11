import styled from 'styled-components'

export const PostFirstInfoContainer = styled.div`
  width: 49.5rem;
  height: 9rem;
  background: ${(props) => props.theme['base-profile']};
  margin: 0 auto;
  margin-top: -5rem;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  border-radius: 8px;
`

export const PostDetailsHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    font-size: 1.1rem;
  }

  a:first-of-type svg {
    padding: 0 0.7rem 0 0;
  }

  a:last-of-type svg {
    padding: 0 0 0 0.7rem;
  }
`

export const PostDetailsContentContainer = styled.div`
  font-weight: 300;
  color: ${(props) => props.theme['base-title']};
`

export const PostDetailsContentFooter = styled.footer`
  margin-top: -1rem;

  span + span {
    padding: 2rem;
  }

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 1.2rem;

    svg {
      color: ${(props) => props.theme['base-label']};
      padding: 0 0.5rem 0 0;
    }
  }
`

export const CodeContentContainer = styled.div`
  width: 52rem;
  margin: 0 auto;
  height: 23.37rem;
  padding: 2.5rem 2rem;
  margin-top: 2.5rem;

  span {
    font-size: 1.2rem;
    color: ${(props) => props.theme['base-text']};
  }
`
