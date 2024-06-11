import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { issuesApi, profileApi } from '../lib/axios'

export interface PostType {
  id: number
  title: string
  created_at: string
  body: string
  comments: number
}

interface ProfileInfo {
  avatar_url?: string
  login?: string
  followers?: number
}

interface PostsContextType {
  posts: PostType[]
  selectedPost: PostType
  profileDetails: ProfileInfo
  setCurrentSelectedPost: (id: number) => void
  fetchPosts: (query?: string) => void
}

interface PostsProviderProps {
  children: ReactNode
}

export const PostsContext = createContext({} as PostsContextType)

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<PostType[]>([])

  const [selectedPost, setSelectedPost] = useState<PostType>({})

  const [profileDetails, setProfile] = useState<ProfileInfo>({})

  function setCurrentSelectedPost(id: number) {
    const currentSelectedPost = posts.filter((post) => post.id === id)[0]

    console.log(currentSelectedPost)

    setSelectedPost(currentSelectedPost)
  }

  const fetchPosts = useCallback(async (query?: string) => {
    const { data } = await issuesApi.get('reactjs-github-blog-challenge', {
      params: {
        q: query,
      },
    })

    setPosts(data.items)
  }, [])

  const fetchProfileInformation = useCallback(async () => {
    const { data } = await profileApi.get('gaiake12')

    setProfile(data)
  }, [])

  useEffect(() => {
    fetchProfileInformation()
    fetchPosts()
  }, [])

  return (
    <PostsContext.Provider
      value={{
        posts,
        selectedPost,
        profileDetails,
        setCurrentSelectedPost,
        fetchPosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}
