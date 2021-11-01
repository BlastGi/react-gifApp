import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([`Jojo's`])

    // Agregar al final
    // const handleAdd = () => {
    //     setCategories( [...categories, 'Hunter X Hunter'] );
    // }
    // Agregar al inicio
    // const handleAdd = () => {
    //     setCategories( [ 'Hunter X Hunter', ...categories] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            category={ category }
                            key={ category }
                        />)
                    )}
            </ol>
        </>
    );
}
