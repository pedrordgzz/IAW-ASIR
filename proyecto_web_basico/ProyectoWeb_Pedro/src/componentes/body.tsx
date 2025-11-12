import React from 'react';
import { Row, Col, Carousel, Card } from 'react-bootstrap';

interface InfoCardProps {
  imageUrl: string;
  text: string;
  title?: string; 
  styleProps?: string; 
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  text,
  imageUrl,
  styleProps,
}) => {
  return (
    <Card className={`shadow-sm h-100 ${styleProps || ''}`}>
      <Card.Img variant="top" src={imageUrl} alt={title || text} />
      <Card.Body>
        {title && <Card.Title>{title}</Card.Title>}
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const GaleriaCarrusel = () => {
  const andaluciaImages = [
    {
      id: 1,
      src: '/granada.jpg',
      alt: 'Alhambra, Granada',
      captionTitle: 'Granada',
      captionText: 'La majestuosa Alhambra bajo el sol.',
    },
    {
      id: 2,
      src: '/sevilla.jpg',
      alt: 'Plaza de España, Sevilla',
      captionTitle: 'Sevilla',
      captionText: 'La icónica Plaza de España.',
    },
    {
      id: 3,
      src: '/cordoba.jpg',
      alt: 'Mezquita de Córdoba',
      captionTitle: 'Córdoba',
      captionText: 'El histórico bosque de columnas de la Mezquita.',
    },
    {
      id: 4,
      src: '/cadiz.jpg',
      alt: 'Playa de La Caleta, Cádiz',
      captionTitle: 'Cádiz',
      captionText: 'Atardecer en la playa de La Caleta.',
    },
    {
      id: 5,
      src: '/almeria.jpg',
      alt: 'Desierto de Tabernas, Almería',
      captionTitle: 'Almería',
      captionText: 'Paisaje único del Desierto de Tabernas.',
    },
    {
      id: 6,
      src: '/malaga.jpg',
      alt: 'Vistas de Málaga',
      captionTitle: 'Málaga',
      captionText: 'Vistas desde el Castillo de Gibralfaro.',
    },
    {
      id: 7,
      src: '/huelva.jpg',
      alt: 'Parque de Doñana, Huelva',
      captionTitle: 'Huelva',
      captionText: 'Marismas en el Parque Nacional de Doñana.',
    },
  ];

  return (
    <Carousel fade className="rounded shadow-sm overflow-hidden">
      {andaluciaImages.map((img) => (
        <Carousel.Item key={img.id}>
          <img className="d-block w-100" src={img.src} alt={img.alt} />
          <Carousel.Caption className="d-none d-md-block bg-dark bg-opacity-50 rounded">
            <h5>{img.captionTitle}</h5>
            <p>{img.captionText}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};


export const Body = () => {
  return (
    <>
      <h2 className="h2-titulo">Nuestros Cursos</h2>
     
      <Row className="g-4 mb-4">
        <Col md={12}>
          <InfoCard
            title="Primera card importada de bootstrap"
            text="Esta card utiliza Bootstrap para su diseño y estilo."
            imageUrl="https://placehold.co/600x400/F24E1E/FFFFFF?text=1ª+Card+Bootstrap"
          />
        </Col>
      </Row>

      <Row xs={1} md={2} className="g-4 mb-5">
        <Col>
          <InfoCard
            imageUrl="https://placehold.co/600x400/61DAFB/FFFFFF?text=2ª+Card+Bootstrap"
            text="Segunda card imoportada de bootstrap."
          />
        </Col>
        <Col>
          <InfoCard
            imageUrl="https://placehold.co/600x400/8CC84B/FFFFFF?text=3ª+Card+Bootstrap"
            text="Tercera card importada de bootstrap."
          />
        </Col>
      </Row>

      <h2 className="h2-titulo" style={{ marginTop: '30px' }}>Galería de Andalucía</h2><GaleriaCarrusel /></>
  );
};