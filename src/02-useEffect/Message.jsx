import React, { useEffect, useState } from 'react';

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0});

    useEffect(() => {

        /* En esta parte creamos una referencia de memoria de aquello que vamos a 
        limpiaar en el return del useEffect */

        const onMouseMove = ( { x, y } ) => {
            const coords = { x, y };
            //console.log( coords );
            setCoords({ x, y });
        }


        // Corre cuando el componente se llama
        //console.log('Message Mounted');

        window.addEventListener('mousemove', onMouseMove );

        return() => {
            // Corre cuando el componente se "destruye"
            //console.log('Message UnMounted');

            // Aquí removemos el listener
            window.removeEventListener('mousemove', onMouseMove );
        }
    }, []);

  return (
    <>
        <h3>Usuario ya existe</h3>
        { JSON.stringify( coords ) }
    </>
  )
}
