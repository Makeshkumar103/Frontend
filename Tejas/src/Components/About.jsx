import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import { FaArrowAltCircleRight } from "react-icons/fa";


const About = () => {
  return (
    <Container>
        <Row className='align-items-center my-5'>
            <Col md={6}>
            {/* <Image src='https://www.tejascity.com/assets/images/about-us.png' alt='about us' fluid /> */}
            <Image src='about.webp' alt='about us' fluid />

            </Col>
            <Col md={6}>
                <h1>20 YEARS OF EXPERIENCE</h1>
                <h1 className='text-warning'>WELCOME TO TEJAS CITY</h1>
                <p>At Tejas City, we blend expertise and passion, transforming bricks into homes and dreams into reality. With a commitment to excellence, we build spaces that resonate with your unique story.</p>
                <ul className='list-unstyled'>
                    <li> <FaArrowAltCircleRight className='text-warning'/> Crafting dreams into home with precision and care</li>
                    <li> <FaArrowAltCircleRight className='text-warning'/> Providing exceptional customer service and support</li>
                    <li> <FaArrowAltCircleRight className='text-warning'/> Building spaces that reflect your unique story</li>
                </ul>
                <Button variant='warning'> READ MORE </Button>
            </Col>
        </Row>
    </Container>

  )
}

export default About