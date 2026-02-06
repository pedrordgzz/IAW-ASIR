// ============================================
// PAGINA DE ERROR - Cuarta Generacion
// Redirige a la pagina 404 ya existente
// ============================================

import { notFound } from 'next/navigation';

export default function CuartaGeneracion_Error() {
    // Llama a notFound() para mostrar la pagina 404 existente
    notFound();
}
