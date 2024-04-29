import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  return (
    <section className='App'>
      <TwitterFollowCard isFollowing userName="ezegamer6495">
        Ezequiel Menor
      </TwitterFollowCard>

      <TwitterFollowCard isFollowing={false} userName="Apple">
        Apple
      </TwitterFollowCard>

    </section>
  )
}