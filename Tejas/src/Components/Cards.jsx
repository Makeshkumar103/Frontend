import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaHome } from "react-icons/fa";


const Cards = () => {
  return (
    <Container>
        <h1>WE ARE BEST <span className='text-warning'>IN</span></h1>
        <hr />
        <Row className='align-items-center my-5'>
            <Col md={4}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <FaHome className='text-warning'/>
                        <Card.Title>BUY & SELL PROPERTY</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant='outline-warning'>Read More</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title><FaHome className='text-warning'/></Card.Title>
                        <Card.Title>BUY & SELL PROPERTY</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant='outline-warning'>Read More</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <FaHome className='text-warning'/>
                        <Card.Title>BUY & SELL PROPERTY</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant='outline-warning'>Read More</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

    </Container>

  )
}

export default Cards