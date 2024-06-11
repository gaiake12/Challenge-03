import { PostContainer } from './styles'
import { PostsContext } from '../../../../context/Posts'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { DistanceFromNowDateHook } from '../../../../hooks/DistanceFromNowDateHook'

interface PostProperties {
  id: number
  body: string
  createdAt: string
  title: string
}

export function Post({ id, body, createdAt, title }: PostProperties) {
  const { setCurrentSelectedPost } = useContext(PostsContext)

  function handleSelectPost() {
    setCurrentSelectedPost(id)
  }

  return (
    <NavLink to="/Details" onClick={handleSelectPost}>
      <PostContainer>
        <header>
          <h3>{title}</h3>
          <p>{DistanceFromNowDateHook(createdAt)}</p>
        </header>

        <p>{body}</p>
      </PostContainer>
    </NavLink>
  )
}
