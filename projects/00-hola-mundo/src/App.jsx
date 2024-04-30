import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

  const users = [
    {
      userName: 'ezegamer6495',
      name: 'Ezequiel',
      isFollowing: true
    },
    {
      userName: 'apple',
      name: 'Apple',
      isFollowing: false
    },
    {
      userName: 'midulive',
      name: 'Miguel Ángel',
      isFollowing: 'true'
    }
  ]
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        )
        )
      }
    </section>
  )
}