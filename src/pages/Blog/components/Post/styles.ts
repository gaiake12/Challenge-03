import styled from 'styled-components'

export const PostContainer = styled.form`
  background: ${(props) => props.theme['base-post']};
  width: 24rem;
  height: 16.25rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  padding: 2rem;
  cursor: pointer;
  gap: 3.5rem;

  header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 1rem;

    h3 {
      font-size: 1.4rem;
      color: ${(props) => props.theme['base-title']};
    }

    > p {
      font-size: 0.85rem;
      white-space: nowrap;
      color: ${(props) => props.theme['base-span']};
    }
  }

  > p {
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
  }
`
