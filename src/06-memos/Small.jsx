import React, { memo } from 'react'
 /* memo 'protege el componente y solamente lo renderiza cuando cambian los props */
export const Small = memo(( { value } ) => {
    

    console.log(' Me volví a dibujar :( ');
    return (
        <small>{ value }</small>
    )
})
