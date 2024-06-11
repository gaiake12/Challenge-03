import axios from 'axios'

export const profileApi = axios.create({
  baseURL: 'https://api.github.com/users/',
})

export const issuesApi = axios.create({
  baseURL: 'https://api.github.com/search/issues?q=repo:rocketseat-education/',
})
