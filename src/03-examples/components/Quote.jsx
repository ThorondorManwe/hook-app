import React, { useLayoutEffect, useRef, useState } from 'react'

export const Quote = ( {quote, author} ) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width:0, height: 0 });

  useLayoutEffect(() => {
    console.log(pRef.current.getBoundingClientRect() );
    /* Tambien se puede desestructurar
    const {height, width} = pRef.current.getBoundingClientRect();
    */
    const width = pRef.current.getBoundingClientRect().width;
    const height = pRef.current.getBoundingClientRect().height;

    setBoxSize( { width: width, height: height } );
  }, [quote])


  return (
    <>
        <blockquote 
            className='blockquote text-end'
            style={ {display: 'flex' } }
        >
              <p ref={pRef} className='mb-1'>{ quote }</p>
              <footer className="blockquote-footer">{ author }</footer>
        </blockquote>

        <code>{ JSON.stringify(boxSize) }</code>
    </>
  )
}
