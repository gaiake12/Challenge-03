import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { PostsProvider } from './context/Posts'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <PostsProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PostsProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
