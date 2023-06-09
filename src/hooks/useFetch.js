import React, { useEffect, useState } from 'react'

export const useFetch = ( contador ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true,
        });


        const resp = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: null,
        });
    }

    useEffect(() => {
        getFetch();
    }, [contador])


  return {
    data:      state.data,
    isLoading: state.isLoading,
    hasError:  state.hasError,
  };
}
