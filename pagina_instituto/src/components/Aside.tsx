export default function Aside() {
    return (
        <aside className="aside">
            <div className="aside-brand">
                <h2 className="brand-title">
                    <span className="brand-next">NEXT</span>
                    <span className="brand-js">.JS</span>
                </h2>
                <p className="brand-subtitle">Next mola</p>
                <p className="brand-description">Curso de Next para todos</p>
            </div>

            <div className="aside-card">
                {/* Contenedor de la imagen */}
                <div className="card-image">
                    <img
                        src="/almeria_castle.png"  
                        alt="Almería"
                    />
                </div>

                {/* Contenido de texto de la tarjeta */}
                <div className="card-content">
                    <h3 className="card-title">Almería</h3>
                    <p className="card-text">Tierra de alumnos de ASIR y DAW</p>
                </div>
            </div>
        </aside>
    )
}
