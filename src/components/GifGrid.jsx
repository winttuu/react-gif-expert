import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    //isloading esta en true y pasa a false cuando tenemos imagenes
    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>cargando...</h2> )
            }

            <div className="card-grid">
                { 
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id }
                            { ...image }  
                        />
                    ))
                }
            </div>
        </>
    )
}