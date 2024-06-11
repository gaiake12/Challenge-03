import { PostSection } from './styles'

import { Search } from './components/Search'
import { Profile } from './components/Profile'
import { Post } from './components/Post'
import { PostsContext } from '../../context/Posts'
import { useContext } from 'react'

export function Blog() {
  const { posts } = useContext(PostsContext)

  const postsWithBody = posts.filter((post) => post.body !== null)

  return (
    <>
      <Profile />
      <Search />
      <PostSection>
        {postsWithBody.length !== 0 &&
          postsWithBody.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              body={post.body}
              title={post.title}
              createdAt={post.created_at}
            />
          ))}
      </PostSection>
    </>
  )
}
