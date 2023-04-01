import React, { useState } from 'react';

export const CounterApp = () => {

    const [ state , setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });
     
    // Destructuramos el object para usar una sola variable
    const {counter1, counter2, counter3 } = state;
  return (

    <>
        <h1>Counter: {counter1}</h1>
        <h2>Counter: {counter2}</h2>
        <h2>Counter: {counter3}</h2>
        <hr />

        <button className="btn" onClick={ () => setCounter( {
            // hacemos una copia con el operador JS , copiamos el state y luego actualizamos solo unas de las pripiedases
            // spread operator
            ...state, // Con esto preservamos el resto del objeto en el state
            counter1: counter1 + 1, // Solo actualizamos las propiedades del objeto que queramos
            counter2: counter2 + 2,
        }) }>+1</button>
    </>
  )
}
