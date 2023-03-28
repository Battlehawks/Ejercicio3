import ItemList from './ItemList';
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import  products from '../utils/products';
import customFetch from '../utils/customFetch';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        customFetch(500, products.filter(item => {
            if (idCategory === undefined) return item
            return item.categoryId === parseInt(idCategory)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [idCategory]);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return (
        <>  
            <ItemList items={datos} />
        </>
    );
}

export default ItemListContainer;