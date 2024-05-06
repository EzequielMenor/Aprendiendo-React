import './App.css'
import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from './hooks/useCatFact'
import { Otro } from './Components/Otro'

export function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })


  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>Apps de gatos</h1>
      <button onClick={handleClick}>Get new fact</button>

      {fact && <p>{fact}</p>}
      <section>

        {imageUrl && <img src={imageUrl} alt={`Image extracted using the first trhee words for ${fact}`} />}

        <Otro />
      </section>
    </main>
  )
}