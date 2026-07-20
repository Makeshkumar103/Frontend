import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/esm/Button';
import Image from 'react-bootstrap/esm/Image';
// import img1 from './images/home-carousel.webp';

const Home = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <Image src='why-choose.webp' alt='why choose us' fluid />
        <Carousel.Caption>
          <h5 className='text-warning'>BUILD YOUR BETTER TOMMOROW</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> 
        <Button variant="warning"> READ MORE </Button>
      </Carousel.Item>

      <Carousel.Item>
        <Image src='why-choose.webp' alt='why choose us' fluid />
        <Carousel.Caption>
          <h5 className='text-warning'>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        <Button variant="warning"> READ MORE </Button>
      </Carousel.Item>

      <Carousel.Item>
        <Image src='why-choose.webp' alt='why choose us' fluid />
        <Carousel.Caption>
          <h5 className='text-warning'>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
        <Button variant="warning"> READ MORE </Button>
      </Carousel.Item>

    </Carousel>
  );
}

export default Home;