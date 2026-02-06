'use client'

import 'bootstrap/dist/css/bootstrap.min.css'
import CardComponent from '@/components/CardComponent'
import ModalNoticia from '@/components/ModalNoticia'

// Definimos el tipo aquí o lo importamos si es compartido.
// Para simplificar, lo definimos localmente o usamos 'any' si ModalNoticia no exporta tipos claros, 
// pero mejor intentar mantener typescript estricto.
// Supuesto: ModalNoticia espera idNoticia string

interface Props {
    modalId?: string
}

interface NoticiaData {
    id: number
    titulo: string
    imagen: string
    texto: string
    esNoticia: boolean
    slug: string // Agregamos slug para la URL
}

const noticias: NoticiaData[] = [
    {
        id: 1,
        titulo: 'Next mola',
        imagen: '/nextjs_logo.png',
        texto: 'Next.js es un framework de React que permite crear aplicaciones web modernas con renderizado del lado del servidor. Curso de Next para todos los niveles.',
        esNoticia: true,
        slug: 'next'
    },
    {
        id: 2,
        titulo: 'Almería',
        imagen: '/almeria_castle.png',
        texto: 'Almería es una ciudad con historia y cultura. Tierra de alumnos de ASIR y DAW que estudian en el IES Cura Valera.',
        esNoticia: true,
        slug: 'almeria'
    },
    {
        id: 3,
        titulo: 'Página no válida',
        imagen: '/404.png',
        texto: 'Esta ruta no corresponde a una noticia válida.',
        esNoticia: false,
        slug: 'antigua'
    }
]

export default function InstitutoContent({ modalId }: Props) {

    return (
        <>
            <div className="instituto-content">
                {/* SECCION IZQUIERDA - TARJETAS */}
                <div className="cards-container">
                    {noticias.map((noticia) => (
                        <CardComponent
                            key={noticia.id}
                            id={noticia.id}
                            imageSrc={noticia.imagen}
                            imageAlt={noticia.titulo}
                            title={noticia.titulo}
                            description={noticia.esNoticia ? noticia.texto.substring(0, 50) + '...' : 'Sin contenido'}
                            variant={noticia.id === 1 ? 'nextjs' : 'almeria'}
                            // En lugar de onVerDetalle, pasamos href
                            href={`/instituto/${noticia.slug}`}
                        />
                    ))}
                </div>

                {/* SECCION CENTRAL - ESPACIO VACIO */}
                <div className="empty-space"></div>

                {/* SECCION DERECHA - BIBLIOWEB */}
                <section className="biblioweb-section">
                    <div className="biblioweb-header">
                        <div className="biblioweb-logo">
                            <div className="biblio-icon">📚</div>
                            <div className="biblioweb-text">
                                <span className="biblio-title">bibliowe</span>
                                <span className="seneca-text">séneca</span>
                            </div>
                        </div>
                    </div>
                    <div className="biblioweb-video">
                        <iframe
                            src="https://www.youtube.com/embed/jRA4rTZamlg?si=JcImLT9V6kYCgAte"
                            title="IES Cura Valera Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </section>
            </div>

            {/* Modal para mostrar detalle de la noticia */}
            {/* Si modalId tiene valor, montamos el ModalNoticia */}
            {modalId && (
                <ModalNoticia idNoticia={modalId} />
            )}
        </>
    )
}
