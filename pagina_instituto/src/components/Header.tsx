import Image from 'next/image'
export default function Header() {
    return (
        //contenedor principal de la cabecera
        <header className="header">
            <div className="header-banner">
                <Image
                    src="/fondo_header.png"       
                    alt="IES Cura Valera"
                    fill                           
                    style={{ objectFit: 'cover' }} 
                    priority                       
                />

                <div className="header-overlay">
                    <div className="header-logo">
                        {/* Logo del instituto */}
                        <Image
                            src="/logo.png"
                            alt="Logo IES Cura Valera"
                            width={80}            
                            height={80}            
                            className="logo-img"
                        />
                    </div>

                    {/* Titulo del instituto */}
                    <h1 className="header-title">IES Cura Valera</h1>
                </div>
            </div>
        </header>
    )
}
