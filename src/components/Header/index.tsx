import { HeaderContainer } from './styles'

import logo from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo Git Blog" />
    </HeaderContainer>
  )
}
