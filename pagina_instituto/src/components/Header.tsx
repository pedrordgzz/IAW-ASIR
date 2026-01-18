import Image from 'next/image'

// Cabecera principal de la web
export default function Header() {
    return (
        <header className="header">
            <div className="header-banner">
                {/* imagen de fondo del instituto */}
                <Image
                    src="/fondo_header.png"
                    alt="IES Cura Valera"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
                <div className="header-overlay">
                    <div className="header-logo">
                        {/* logo del instituto */}
                        <Image
                            src="/logo.png"
                            alt="Logo IES Cura Valera"
                            width={80}
                            height={80}
                            className="logo-img"
                        />
                    </div>
                    <h1 className="header-title">IES Cura Valera</h1>
                </div>
            </div>
        </header>
    )
}
