'use client'

import Card from 'react-bootstrap/Card'

// Props para la tarjeta
interface Props {
    imageSrc: string
    imageAlt: string
    title: string
    subtitle?: string
    description: string
    variant?: 'nextjs' | 'almeria'
}

// Componente de tarjeta reutilizable
export default function CardComponent({ imageSrc, imageAlt, title, subtitle, description, variant = 'almeria' }: Props) {

    // clase css segun el tipo
    const cardClass = `custom-card ${variant}-card`
    const bodyClass = variant === 'almeria' ? 'almeria-body' : ''

    return (
        <Card className={cardClass}>
            <Card.Img variant="top" src={imageSrc} alt={imageAlt} />
            <Card.Body className={bodyClass}>
                {subtitle && <Card.Subtitle className="mb-1 text-muted card-subtitle">{subtitle}</Card.Subtitle>}
                <Card.Title className="card-title-custom">{title}</Card.Title>
                <Card.Text className="card-text-custom">{description}</Card.Text>
            </Card.Body>
        </Card>
    )
}
