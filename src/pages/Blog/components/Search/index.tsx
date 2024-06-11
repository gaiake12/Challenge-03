import { HeaderContainer, SearchContainer } from './styles'
import { PostsContext } from '../../../../context/Posts'
import { ChangeEvent, useContext, useState } from 'react'

export function Search() {
  const { posts, fetchPosts } = useContext(PostsContext)

  const [searchValue, setSearchValue] = useState('')

  function handleChangeValue(event: ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value)
    fetchPosts(searchValue)
  }

  return (
    <SearchContainer>
      <HeaderContainer>
        <h3>Publicações</h3>
        <p>{posts.length} Publicações</p>
      </HeaderContainer>

      <input
        onChange={handleChangeValue}
        type="text"
        placeholder="Buscar Conteúdo"
        value={searchValue}
      />
    </SearchContainer>
  )
}
