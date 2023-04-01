import React, { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: 'strider',
        email: 'fernando@google.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setformState({
            ...formState,
            [ name ]: value, // propiedades computadas de JS
        })
    }

    // Si el useEffect no tiene ninguna dependencia se llama cada que el estado o SimpleForm se renderice
    // Cuando se llenan los campos por ejemplo

    /* Se recomienda tener varios efectos separados para cada efecto secundario que querramos usar en el site */
    useEffect( () => {
        //console.log('useEffect called');
    }, [ ]);

    useEffect( () => {
        //console.log('formState changed');
    }, [formState]);

    useEffect( () => {
        //console.log('email changed');
    }, [email]);

  return (
    <>
        <h1>Simple form</h1>
        <hr />

        <input
            type="text"
            className="form-control"
            placeholder='Username'
            name="username"
            value = { username }
            onChange={ onInputChange }
        />

        <input
            type="email"
            className="form-control mt-2"
            placeholder='tuemail@google.com'
            name="email"
            value = { email }
            onChange={ onInputChange }
        />

        { username === 'strider2' && <Message /> }
    </>
  )
}
