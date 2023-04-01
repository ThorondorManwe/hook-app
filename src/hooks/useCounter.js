import { useState } from "react"


export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue);

    const increment = ( value = 1 ) => {
        setCounter( counter + value ); 
    }

    const decrement = (value = 1) => {
        setCounter( counter - value );
    }

    const reset = () => {
        setCounter( 10 );
    }

    /* Retorno un objeto y por eso puedo desestructuralo cuando lo importo en el componente
    CounterWithCustomHook */
    /* Necesito exponer una función para que se pueda usar el setCounter */
    return {
        counter,
        increment,
        decrement,
        reset,
    }
}