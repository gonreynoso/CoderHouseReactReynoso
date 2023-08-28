import { getProducts } from '../../../services/asyncmock';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


function ItemListContainer() {

    const [products, setProducts] = useState([])
    const { category } = useParams()

    useEffect(() => {

        getProducts(category)
            .then((response) => {

                setProducts(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [category])



    return (
        <div >
            <ItemList products={products} />
        </div>
    );

}

export default ItemListContainer;