import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Grid3() {
    return (
      <Container className='bg-info'>
        {/* <Row>
          <Col md={4} className='bg-primary'>md=4</Col>
          <Col md={{ span: 4, offset: 4 }}className='bg-secondary'>{`md={{ span: 4, offset: 4 }}`}</Col>
        </Row>
        <Row>
          <Col md={{ span: 3, offset: 3 }}className='bg-primary'>{`md={{ span: 3, offset: 3 }}`}</Col>
          <Col md={{ span: 3, offset: 3 }} className='bg-secondary'>{`md={{ span: 3, offset: 3 }}`}</Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className='bg-primary'>{`md={{ span: 6, offset: 3 }}`}</Col>
        </Row> */}
        <h1>Rowcol Layout</h1>
        <Row xs={2} md={4} lg={6} className='bg-warning'>
            <Col className='bg-danger'>xs={2} md={4} lg={6}</Col>
            <Col className='bg-success'>xs={2} md={4} lg={6}</Col>
        </Row>
        <Row xs={1} md={2} className='bg-warning'>
            <Col className='bg-danger'>1 of 3</Col>
            <Col className='bg-success'>2 of 3</Col>
            <Col className='bg-danger'>3 of 3</Col>
        </Row>
        <Row md="2" className='bg-warning'>
            <Col className='bg-danger'>1 of 3</Col>
            <Col className='bg-success'>2 of 3</Col>
            <Col className='bg-danger'>3 of 3</Col>
        </Row>
        <br />
        <Container>
        <Row sm={4}>
            <Col className='bg-danger'>1 of 3</Col>
            <Col className='bg-success'>2 of 3</Col>
            <Col className='bg-danger'>3 of 3</Col>
            <Col className='bg-success'>2 of 3</Col>
            <Col className='bg-danger'>3 of 3</Col>
            <Col className='bg-success'>2 of 3</Col>
            <Col className='bg-danger'>3 of 3</Col>
            <Col className='bg-success'>2 of 3</Col>

        </Row>
        <br />

        <Row md={4}>
            <Col className='bg-danger'>1 of 3</Col>
            <Col className='bg-success'>2 of 3</Col>
            <Col className='bg-danger'>3 of 3</Col>
            <Col className='bg-success'>2 of 3</Col>
            <Col className='bg-danger'>3 of 3</Col>
            <Col className='bg-success'>2 of 3</Col>
            <Col className='bg-danger'>3 of 3</Col>
            <Col className='bg-success'>2 of 3</Col>

        </Row>
        <br />

        <Row lg={4}>
            <Col className='bg-danger'>1 of 3</Col>
            <Col className='bg-success'>2 of 3</Col>
            <Col className='bg-danger'>3 of 3</Col>
            <Col className='bg-success'>2 of 3</Col>
            <Col className='bg-danger'>3 of 3</Col>
            <Col className='bg-success'>2 of 3</Col>
            <Col className='bg-danger'>3 of 3</Col>
            <Col className='bg-success'>2 of 3</Col>

        </Row>
    </Container>
      </Container>
      
    );
  }
  export default Grid3;