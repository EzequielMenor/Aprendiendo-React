import './App.css'
import { Router } from './Router'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import Page404 from './pages/404'
import SearchPage from './pages/SearchPage'

const appRoutes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App() {
  return (
    <main>
      <Router routes={appRoutes} defaultComponent={Page404} />
    </main>
  )
}

export default App
