// ============================================
// LAYOUT DEL INSTITUTO
// Estructura que envuelve todas las paginas de /instituto
// ============================================

// Componentes de estructura
import Header from '@/components/Header'    // Cabecera con imagen de fondo
import NavBar from '@/components/NavBar'    // Menu de navegacion
import Footer from '@/components/Footer'    // Pie de pagina

// ============================================
// COMPONENTE LAYOUT DEL INSTITUTO
// children = el contenido de cada pagina individual
// ============================================
export default function InstitutoLayout({ children }: { children: React.ReactNode }) {
    return (
        // instituto-layout = clase CSS para el contenedor principal
        // Usa flexbox en direccion columna
        <div className="instituto-layout">
            {/* Cabecera con imagen de fondo y logo */}
            <Header />

            {/* Menu de navegacion horizontal */}
            <NavBar />

            {/* Contenedor del contenido principal */}
            <div className="instituto-main">
                {children}  {/* Aqui se renderiza cada pagina */}
            </div>

            {/* Pie de pagina */}
            <Footer />
        </div>
    )
}
