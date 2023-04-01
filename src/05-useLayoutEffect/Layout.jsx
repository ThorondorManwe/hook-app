import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch';
import { LoadingQuote } from '../03-examples/components/LoadingQuote';
import { Quote } from '../03-examples/components/Quote';

export const Layout = () => {

  const [counterNew, setCounterNew] = useState(0);

  function handleCounter(e) {
    e.preventDefault();
    setCounterNew(counterNew + 1);
  } 

  // const { data, isLoading, hasError } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes');
  const { data, isLoading, hasError } = useFetch(counterNew);

  //console.log( {data, isLoading, hasError} );

  const { quote, author } = !!data && data[0];
  console.log({ author, quote });

  /* if ( isLoading ) {
    return (S
      <h2>Cargando...</h2>
    )
  } */


  return (
    <>
        <h1>Breaking Bad Quotes</h1>
        <hr />

        {
          isLoading ? <LoadingQuote /> : <Quote quote={quote} author={author} />
        }


        <button onClick={handleCounter} className="btn btn-primary">Next Quote</button>




    </>
  )
}
