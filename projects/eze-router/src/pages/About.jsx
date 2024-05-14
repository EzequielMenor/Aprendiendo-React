import { Link } from '../Link.jsx'

const i18n = {
  es: {
    title: 'Sobre nosotros',
    button: 'Ir a la home',
    description: 'Hola, me llamo Ezequiel y estoy creando un clon de React Router.'
  },
  en: {
    title: 'About us',
    button: 'Go to home',
    description: 'Hi, my name is Ezequiel and I am creating a clone of React Router'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es')
  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img src="https://avatars.githubusercontent.com/u/69210721?v=4" alt='Foto de Ezequiel' />
        <p>{i18n.description}</p>
      </div>
      <Link to='/'>{i18n.button}</Link>
    </>
  )
} 