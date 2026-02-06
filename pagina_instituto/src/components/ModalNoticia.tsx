// src/components/ModalNoticia.jsx
import Link from 'next/link';
import Image from 'next/image'; // Si usas el componente Image de Next

export default function ModalNoticia({ idNoticia }) {
  
  // 1. Definir los datos válidos (simulando API)
  const datos = {
    next: {
      titulo: "Defensa NEXT.JS",
      texto: "Aquí mostramos el detalle sobre la defensa del proyecto en Next.js. Es un framework de React...",
      imagen: "/images/next-logo.png" // Asegúrate de tener esta imagen o cambia la ruta
    },
    almeria: {
      titulo: "Excursión a Almería",
      texto: "Detalles sobre la actividad realizada en Almería con el instituto...",
      imagen: "/images/almeria.jpg" // Asegúrate de tener esta imagen
    }
  };

  // 2. Lógica de validación (El requerimiento estricto)
  const contenido = datos[idNoticia];
  const esError = !contenido;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full shadow-xl relative text-center">
        
        {/* CASO: ERROR (No es ni next ni almeria) */}
        {esError ? (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">NADA QUE MOSTRAR</h2>
            {/* Usa una imagen 404 real que tengas en public/ */}
            <div className="relative w-64 h-64 mb-4">
               <img src="/images/404.png" alt="Error 404" className="object-contain" />
            </div>
            <p className="mb-4">La ruta "{idNoticia}" no existe.</p>
          </div>
        ) : (
          /* CASO: ÉXITO (Muestra Next o Almería) */
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">{contenido.titulo}</h2>
            <div className="relative w-full h-48 mb-4">
              <img 
                src={contenido.imagen} 
                alt={contenido.titulo} 
                className="w-full h-full object-cover rounded"
              />
            </div>
            <p className="text-gray-700 mb-6 text-justify">
              {contenido.texto}
            </p>
          </div>
        )}

        {/* Botón para cerrar (Link volver a inicio) */}
        {/* Al hacer clic, quitamos el parámetro de la URL volviendo a la raiz */}
        <Link 
            href="/" 
            className="mt-4 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Volver a inicio
        </Link>

      </div>
    </div>
  );
}