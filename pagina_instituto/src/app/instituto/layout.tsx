import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

// Layout principal de la seccion instituto
export default function InstitutoLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="instituto-layout">
            <Header />
            <NavBar />
            <div className="instituto-main">
                {children}
            </div>
            <Footer />
        </div>
    )
}
