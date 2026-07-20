import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import { FaArrowAltCircleRight } from "react-icons/fa";


const Footer = () => {
  return (
    <Container>
        <Row>
            <Col md={4}>
                <h1>TEJAS CITY</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reiciendis vero minima cupiditate modi ipsum repellat expedita, saepe deleniti fugit voluptates sequi? Labore exercitationem sunt vero itaque perferendis esse perspiciatis.</p>
            </Col>
            <Col md={4}>
                <h1>USEFUL LINKS</h1>
                <ul className='list-unstyled'>
                   <li><FaArrowAltCircleRight className='text-warning'/> Home</li>
                   <li><FaArrowAltCircleRight className='text-warning'/> About Us</li>
                   <li><FaArrowAltCircleRight className='text-warning'/> Projects</li>
                   <li><FaArrowAltCircleRight className='text-warning'/> Services</li>
                   <li><FaArrowAltCircleRight className='text-warning'/> Contact</li>
                   <li><FaArrowAltCircleRight className='text-warning'/> Admin</li>
                </ul>
            </Col>
             <Col md={4}>
                <h1>OUR PRODUCTS</h1>
                <ul>
                   <li>Accommplished Project</li>
                   <li>Project Underway</li>
                   <li>Future Projects</li>
                </ul>
            </Col>
            <Col md={4}>
            <Stack direction='horizontal' gap={3} className='justify-content-center'>
                <p>Ground Floor,No.58, Chellandiamman Nagar, Singanallur, Coimbatore -641005</p>
                <p>Call Us : 8428828882</p>
                <p>Email : tejascitydevelopers@gmail.com</p>
            </Stack>
            </Col>
        </Row>
        <hr />
     
        <p>Copyrights © 2025 TEJAS CIRY DEVELOPERS | All rights reserved.</p>
    </Container>

  )
}

export default Footer