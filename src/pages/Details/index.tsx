import {
  PostFirstInfoContainer,
  PostDetailsHeaderContainer,
  PostDetailsContentContainer,
  PostDetailsContentFooter,
  CodeContentContainer,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faCalendarAlt,
  faComment,
} from '@fortawesome/free-solid-svg-icons'

import { PostsContext } from '../../context/Posts'
import { useContext } from 'react'

export function Details() {
  const { profileDetails, selectedPost } = useContext(PostsContext)

  return (
    <>
      <PostFirstInfoContainer>
        <PostDetailsHeaderContainer>
          <a href="">
            <FontAwesomeIcon icon={faChevronLeft} />
            VOLTAR
          </a>
          <a href="">
            VER NO GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </PostDetailsHeaderContainer>

        <PostDetailsContentContainer>
          <h1>{selectedPost.title}</h1>
        </PostDetailsContentContainer>

        <PostDetailsContentFooter>
          <span>
            <FontAwesomeIcon icon={faGithub} /> {profileDetails.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarAlt} />
            Há x dias
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />
            {selectedPost.comments} comentários
          </span>
        </PostDetailsContentFooter>
      </PostFirstInfoContainer>

      <CodeContentContainer>
        <span>{selectedPost.body}</span>
      </CodeContentContainer>
    </>
  )
}
