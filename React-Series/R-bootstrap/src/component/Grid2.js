import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Grid2() {
  return (
    <Container>
      <Row>
        <Col sm={8} className='bg-primary'>sm=8</Col>
        <Col sm={4} className='bg-secondary'>sm=4</Col>
      </Row>
      <Row>
        <Col className='bg-primary'> nothing </Col>
        <Col className='bg-secondary'> nothing </Col>
        <Col className='bg-primary'> nothing </Col>
      </Row>
      <Row>
        <Col xs className='bg-primary'> xs </Col>
        <Col xs className='bg-secondary'> xs </Col>
        <Col xs className='bg-primary'> xs </Col>
      </Row>
      <Row>
        <Col sm className='bg-primary'>sm</Col>
        <Col sm className='bg-secondary'>sm</Col>
        <Col sm className='bg-primary'>sm</Col>
      </Row>
      <Row>
        <Col md className='bg-primary'>md</Col>
        <Col md className='bg-secondary'>md</Col>
        <Col md className='bg-primary'>md</Col>
      </Row>
      <Row>
        <Col lg className='bg-primary'>sm=true</Col>
        <Col lg className='bg-secondary'>sm=true</Col>
        <Col lg className='bg-primary'>sm=true</Col>
      </Row>
    </Container>
  );

}
export default Grid2
