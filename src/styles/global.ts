import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: 0;
}

:focus {
  outline: 0;
}

body {
  -webkit-font-smoothing: antialiased;
  background: ${(props) => props.theme['base-background']};
}

body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
}

`
