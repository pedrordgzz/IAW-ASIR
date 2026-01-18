export default function MainLayout({ children, }:
{ children: React.ReactNode}) {
 return (
 <div>
 {/* Header común*/}
 <header className="bg-white shadow">
 <nav className="container mx-auto px-4 py-4">
 <a href="/">Inicio</a>
 <a href="/about">Acerca de</a>
 <a href="/contact">Contacto</a>
 </nav>
 </header>

 <main>{children}</main>

 {/* Footer común */}
 <footer className="bg-gray-900 text-white p-4">
 © 2026 Mi Sitio
 </footer>
 </div>
 )
}