// layout principal de la aplicacion
import type { Metadata } from 'next';
import { ProveedorIdioma_App } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Navbarra from '@/components/Navbarra';
import Footer from '@/components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pokedex NextJS',
  description: 'Aplicacion de Pokemon con NextJS',
  icons: { icon: '/pokeball.png' },
};

export default function LayoutPrincipal_App({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning evita el error de extensiones del navegador
    <html lang="es" suppressHydrationWarning>
      <body className="d-flex flex-column min-vh-100">
        <ProveedorIdioma_App>
          <Header />
          <Navbarra />
          <main className="flex-grow-1 py-4">
            <div className="container">
              {children}
            </div>
          </main>
          <Footer />
        </ProveedorIdioma_App>
      </body>
    </html>
  );
}
