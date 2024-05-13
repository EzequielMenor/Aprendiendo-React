import { Link } from '../Link.jsx'

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img src="https://avatars.githubusercontent.com/u/69210721?v=4" alt='Foto de Ezequiel' />
        <p>¡Hola! Me llamo Ezequiel y estoy creando un clon de React Router.</p>
      </div>
      <Link to='/'>Ir a la home</Link>
    </>
  )
}