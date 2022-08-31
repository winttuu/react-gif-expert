import { useState, useEffect } from "react";
import { getGifs } from '../helpers/getGifs'

// un hook no es mas q una funcion q regresa algo
export const useFetchGifs = ( category ) => {

    const [ images, setImages ] = useState([]);
    const [ isLoading, setIsLoading ] = useState( true );


    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }   

    useEffect( () => {
        getImages();
    }, [])


    return {
        images,
        isLoading
    }

}


