import React, { useCallback } from 'react';

function BotonConsola() {
  // La función se memoriza: no se vuelve a crear en cada render
  const imprimirMensaje = useCallback(() => {
    console.log('¡Hola desde useCallback!');
  }, []); // Se crea solo una vez

  return (
    <div>
      <button onClick={imprimirMensaje}>Imprimir mensaje</button>
    </div>
  );
}

export default BotonConsola;
