'use client';
import { useIdioma } from '@/context/LanguageContext';

export default function Header_App() {
  const { dict } = useIdioma();

  return (
    <header className="header-pokemon">
      <div className="header-overlay">
        <h1 className="header-title">{dict.titulo}</h1>
      </div>
    </header>
  );
}
