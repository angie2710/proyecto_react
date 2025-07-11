import React, { useState, useMemo } from 'react';

function DobleMemo() {
  const [numero, setNumero] = useState(0);
  const [contador, setContador] = useState(0);

  // Memoriza el doble solo cuando cambia "numero"
  const doble = useMemo(() => {
    console.log('Calculando doble...');
    return numero * 2;
  }, [numero]);

  return (
    <div>
      <h3>Número: {numero}</h3>
      <h3>Doble (memoizado): {doble}</h3>
      <button onClick={() => setNumero(numero + 1)}>Sumar número</button>
      <hr />
      <h4>Contador: {contador}</h4>
      <button onClick={() => setContador(contador + 1)}>Sumar contador</button>
    </div>
  );
}

export default DobleMemo;
