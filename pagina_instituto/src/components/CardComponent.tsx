'use client'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'

interface Props {
    id?: number
    imageSrc: string
    imageAlt: string
    title: string
    subtitle?: string
    description: string
    variant?: 'nextjs' | 'almeria'
    onVerDetalle?: (id: number) => void
    href?: string
}


export default function CardComponent({
    id,
    imageSrc,
    imageAlt,
    title,
    subtitle,
    description,
    variant = 'almeria',
    onVerDetalle,
    href
}: Props) {

    const cardClass = `custom-card ${variant}-card`
    const bodyClass = variant === 'almeria' ? 'almeria-body' : ''

    return (
        <Card className={cardClass}>
            <Card.Img variant="top" src={imageSrc} alt={imageAlt} />
            <Card.Body className={bodyClass}>
                {subtitle && (
                    <Card.Subtitle className="mb-1 text-muted card-subtitle">
                        {subtitle}
                    </Card.Subtitle>
                )}
                <Card.Title className="card-title-custom">{title}</Card.Title>
                <Card.Text className="card-text-custom">{description}</Card.Text>

                {/* Boton Ver detalle - Link si hay href, Button si hay callback */}
                {href ? (
                    <Link href={href} className="btn btn-primary mt-2">
                        Ver detalle
                    </Link>
                ) : (
                    onVerDetalle && id !== undefined && (
                        <Button
                            variant="primary"
                            onClick={() => onVerDetalle(id)}
                            className="mt-2"
                        >
                            Ver detalle
                        </Button>
                    )
                )}
            </Card.Body>
        </Card>
    )
}
