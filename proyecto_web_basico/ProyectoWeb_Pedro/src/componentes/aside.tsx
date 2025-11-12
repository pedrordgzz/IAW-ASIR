import React, { useState } from 'react'; 
import heroesData from '../../heroes.json';

interface Hero {
  superhero: string;
  alter_ego: string;
  publisher: string;
}

const SelectorHeroesMarvel = () => {
  const marvelHeroes: Hero[] = (heroesData as Hero[]).filter(
    (heroe): heroe is Hero => heroe.publisher === 'Marvel Comics'
  );

  // Guardar los heroes selecconados
  const [selectedHeroes, setSelectedHeroes] = useState<string[]>([]);

  // Función que se llama cuando selecciono un heroe
  const handleSelectHero = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const heroName = e.target.value;

    // El heroe se añade solo si no está ya en la lista
    if (heroName && !selectedHeroes.includes(heroName)) {
      setSelectedHeroes([...selectedHeroes, heroName]);
    }

  };

  return (
    <div className="selector-heroes">
      <h3>Selector de Héroes (Marvel)</h3>

      <select onChange={handleSelectHero} defaultValue="">
        <option value="" disabled> - Elige un héroe -</option>
       
        {marvelHeroes.map((heroe, index) => (
          <option key={index} value={heroe.superhero}>
            {heroe.superhero} ({heroe.alter_ego})
          </option>
        ))
        }
      </select>

      <h4>Héroes Seleccionados:</h4>

      <div className="heroes-seleccionados">
        {selectedHeroes.length > 0
          ? selectedHeroes.join(', ') 
          : 'Ninguno seleccionado.'}
      </div>
    </div>
  );
};

/* Componente para agregar un video de YT*/
const YoutubeEmbed = () => {
  return (
    <div className="video-container">
      <h3>Vídeo Destacado</h3>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/safCS7NXKd0?si=x9Jd5DFAvyMAD2GV" />
    </div>
  );
};

export const Aside = () => {
  return (
    <>
      <SelectorHeroesMarvel /> 
      <YoutubeEmbed />
    </>
  );
};