import {
  ProfileContainer,
  TextContentContainer,
  FooterPostContainer,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { PostsContext } from '../../../../context/Posts'
import { useContext } from 'react'

export function Profile() {
  const { profileDetails } = useContext(PostsContext)

  const { avatar_url, login, followers } = profileDetails

  return (
    <ProfileContainer>
      <img src={avatar_url} alt="Avatar Profile" />
      <TextContentContainer>
        <header>
          <h1>Matheus Oliveira</h1>
          <a href="">
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
          consectetur dolore alias.jkfashldjfhgkjasd
        </p>

        <FooterPostContainer>
          <span>
            <FontAwesomeIcon icon={faGithub} /> {login}
          </span>

          <span>
            <FontAwesomeIcon icon={faBuilding} /> Bradesco S/A
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            {followers} seguidores
          </span>
        </FooterPostContainer>
      </TextContentContainer>
    </ProfileContainer>
  )
}
