import 'bootstrap/dist/css/bootstrap.min.css'

import {Container, Row, Col} from 'react-bootstrap'

import './App.css'
import {useStore} from './hooks/useStore'
import {AUTO_LANGUAGE} from './constants'

export default function App() {
  const {fromLanguage, toLanguage, interchangeLanguages} = useStore()

  return (
    <Container fluid>
      <h1>Google Translate</h1>

      <Row>
        <Col>
          <h2>From</h2>
          {fromLanguage}
        </Col>

        <Col>
          <button
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interchangeLanguages}>
            intercamiar
          </button>
        </Col>

        <Col>
          <h2>to</h2>
          {toLanguage}
        </Col>
      </Row>
    </Container>
  )
}
