import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout'
import { Blog } from './pages/Blog'
import { Details } from './pages/Details'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/Details" element={<Details />} />
      </Route>
    </Routes>
  )
}
