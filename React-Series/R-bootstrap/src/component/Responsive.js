import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Responsive() {
  return (
    <Container className=" bg-warning">
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row className="bg-dark">
        <Col xs={12} md={8} className="bg-danger">    xs=12 md=8  </Col>
        <Col xs={6} md={4} className="bg-info">    xs=6 md=4  </Col>
        <Col xs={12} md={8} className="bg-danger">    xs=12 md=8  </Col>
        <Col xs={6} md={4} className="bg-info">    xs=6 md=4  </Col> 
      </Row>

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row className="bg-dark">
        <Col xs={6} md={4} className='bg-primary'>    xs=6 md=4  </Col>
        <Col xs={6} md={4} className='bg-secondary'>    xs=6 md=4  </Col>
        <Col xs={6} md={4} className='bg-primary'>    xs=6 md=4  </Col>
        <Col xs={6} md={4} className='bg-secondary'>    xs=6 md=4  </Col>
        <Col xs={6} md={4} className='bg-primary'>    xs=6 md=4  </Col>
        <Col xs={6} md={4} className='bg-secondary'>    xs=6 md=4  </Col>
      </Row>

      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row className="bg-dark">
        <Col xs={6} className='bg-primary'>xs=6</Col>
        <Col xs={6} className='bg-secondary'>xs=6</Col>
        <Col xs={6} className='bg-primary'>xs=6</Col>
        <Col xs={6} className='bg-secondary'>xs=6</Col>
        <Col xs={6} className='bg-primary'>xs=6</Col>
        <Col xs={6} className='bg-secondary'>xs=6</Col>
      </Row>
    </Container>
  );
}

export default Responsive;