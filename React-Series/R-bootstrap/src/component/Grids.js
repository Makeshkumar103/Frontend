import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Grid.css';
function Grids() {
  return (
    <>
    <Container  className=" bg-warning"> 
      <Row className="border border-secondary">
        <Col md={4} className='bg-primary'>1</Col>
        <Col md={4} className='bg-secondary'>2</Col>
        <Col md={4} className='bg-primary'>3</Col>
        <Col md={4} className='bg-primary'>4</Col>
        <Col md={4} className='bg-secondary'>5</Col>
        <Col md={4} className='bg-primary'>6</Col>
      </Row>
      <Row className=" justify-content-center border border-secondary">
        <Col md={4} className='bg-primary'>         1 of 3       </Col>
        <Col md={4} className='bg-secondary'>Variable width content</Col>
        <Col md={4} className='bg-primary'>         3 of 3       </Col>
      </Row>
      <div className="br"/>
      <div className="hr" />
      <Row className="justify-content-md-center">
        <Col xs lg="2" className='bg-primary'>    1 of 3  </Col>
        <Col md="auto" className='bg-secondary'>Variable width content</Col>
        <Col xs lg="2" className='bg-primary'>    3 of 3  </Col>
      </Row>
      <Row className="justify-content-center">
         <Col md={4} className='bg-primary'>1</Col>
        <Col md={4} className='bg-secondary'>2</Col>
        <Col md={4} className='bg-primary'>3</Col>
        <Col md={4} className='bg-primary'>4</Col>
        <Col md={4} className='bg-secondary'>5</Col>
        <Col md={4} className='bg-primary'>6</Col>
      </Row>      </Container>
    </>
  );
}

export default Grids;