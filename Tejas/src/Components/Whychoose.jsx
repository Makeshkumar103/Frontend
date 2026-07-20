import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import { FaArrowAltCircleRight } from "react-icons/fa";

const Whychoose = () => {
  return (
    <Container>
        <h3>OUR SPECIAL SUPPORT</h3>
        <h1 className='text-warning'>WHY CHOOSE  US</h1>
        <hr className='text-warning'/>
        <Row className='align-items-center my-2'>
            <Col> 
                <p>At Tejas City, we blend expertise and passion, transforming bricks into homes and dreams into reality. With a commitment to excellence, we build spaces that resonate with your unique story.</p>
                <ul className='list-unstyled'>
                    <li> <FaArrowAltCircleRight className='text-warning'/> Expert & Professional</li>
                    <li> <FaArrowAltCircleRight className='text-warning'/> Quality & Reliability</li>
                    <li> <FaArrowAltCircleRight className='text-warning'/> Quick in Response</li>
                    <li> <FaArrowAltCircleRight className='text-warning'/> Customer Satisfaction</li>
                    <li> <FaArrowAltCircleRight className='text-warning'/> Innovative Designs</li>
                    <li> <FaArrowAltCircleRight className='text-warning'/> 24/7 Emergency</li>
                </ul>
            </Col>
            <Col>
                <Image src='why-choose.webp' alt='why choose us' fluid />
            </Col>
        </Row>
    </Container>

  )
}

export default Whychoose