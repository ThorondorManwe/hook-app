import React, { useEffect } from 'react';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {


    /* Desestructura las propiedades del state que exporta useForm */

    const { formState, onInputChange, username, email, password, onResetForm } = useForm({
        username: '',
        email: '',
        password: '',
    });

    //const { username, email, password } = formState;

    /* const [formState, setformState] = useState({
        username: '',
        email: '',
        password: '',
    });

    const { username, email, password } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setformState({
            ...formState,
            [ name ]: value, // propiedades computadas de JS
        })
    } */

  return (
    <>
        <h1>Formulario con Custom Hook</h1>
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

        <input
            type="password"
            className="form-control mt-2"
            placeholder='contraseña'
            name="password"
            value = { password }
            onChange={ onInputChange }
        />

        <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>

    </>
  )
}
