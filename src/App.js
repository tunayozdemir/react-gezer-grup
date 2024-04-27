import React from 'react'
import { Home } from './pages'
import { Container, Row, Col } from 'reactstrap';

const App = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Home />
        </Col>
      </Row>
    </Container>
  )
}

export default App