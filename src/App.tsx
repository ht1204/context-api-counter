import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CounterDisplay from './components/CounterDisplay/CounterDisplay';
import CounterButtons from './components/CounterButtons/CounterButtons';

import './App.css';

function App() {
  return (
    <Container className="app">
      <Row>
        <Col>
          <h1>Counter App</h1>
          <CounterDisplay />
        </Col>
      </Row>
      <Row>
        <CounterButtons />
      </Row>
    </Container>
  );
}

export default App;
