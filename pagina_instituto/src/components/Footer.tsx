'use client'
import Logo from './Logo'
const logos = [
    {
        id: 1,
        imagen: '/logo1.png',
        enlace: 'https://www.facebook.com/IESCuraValera',
        alt: 'Facebook IES Cura Valera'
    },
    {
        id: 2,
        imagen: '/logo2jpg.jpg',
        enlace: 'https://twitter.com/IESCuraValera',
        alt: 'Twitter IES Cura Valera'
    },
    {
        id: 3,
        imagen: '/logo.png',
        enlace: 'https://www.instagram.com/iescuravalera',
        alt: 'Instagram IES Cura Valera'
    }
]

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Seccion de informacion */}
                <div className="footer-section">
                    <h4 className="footer-title">Encuéntranos en...</h4>
                    <p className="footer-label">DIRECCIÓN POSTAL:</p>
                    <address className="footer-address">
                        Avda. Guillermo Reyna, 35<br />
                        04600 HUÉRCAL-OVERA
                    </address>
                </div>

                {/* Seccion de logos con map */}
                <div className="footer-logos" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    {logos.map((logo) => (
                        <Logo
                            key={logo.id}
                            imagen={logo.imagen}
                            enlace={logo.enlace}
                            alt={logo.alt}
                        />
                    ))}
                </div>
            </div>
        </footer>
    )
}
