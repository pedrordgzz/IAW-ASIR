'use client'

import 'bootstrap/dist/css/bootstrap.min.css'
import CardComponent from '@/components/CardComponent'

// Pagina principal del instituto
export default function InstitutoPage() {
    return (
        <div className="instituto-content">
            {/* tarjetas de la izquierda */}
            <div className="cards-container">
                <CardComponent
                    imageSrc="/nextjs_logo.png"
                    imageAlt="NEXT.js Logo"
                    title="Next mola"
                    description="Curso de Next para todos"
                    variant="nextjs"
                />
                <CardComponent
                    imageSrc="/almeria_castle.png"
                    imageAlt="Almería"
                    title="Almería"
                    description="Tierra de alumnos de ASIR y DAW"
                    variant="almeria"
                />
            </div>

            {/* espacio del medio */}
            <div className="empty-space"></div>

            {/* seccion biblioweb */}
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
    )
}
