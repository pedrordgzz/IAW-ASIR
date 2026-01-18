// Carrusel de imagenes de Andalucia
import Carousel from 'react-bootstrap/Carousel'
import ExampleCarouselImage from 'components/ExampleCarouselImage'

function PageAndalucia() {
  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="Primera imagen" />
        <Carousel.Caption>
          <h3>Imagen 1</h3>
          <p>Primera imagen del carrusel.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Segunda imagen" />
        <Carousel.Caption>
          <h3>Imagen 2</h3>
          <p>Segunda imagen del carrusel.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Tercera imagen" />
        <Carousel.Caption>
          <h3>Imagen 3</h3>
          <p>Tercera imagen del carrusel.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default PageAndalucia