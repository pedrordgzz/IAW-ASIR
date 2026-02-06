'use client'
import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
    imagen: string   
    enlace: string   
    alt?: string     
}

export default function Logo({ imagen, enlace, alt = 'Logo' }: LogoProps) {
    return (
        <Link href={enlace} target="_blank" rel="noopener noreferrer">
            <Image
                src={imagen}
                alt={alt}
                width={50}
                height={50}
                style={{ objectFit: 'contain' }}
                unoptimized
            />
        </Link>
    )
}
