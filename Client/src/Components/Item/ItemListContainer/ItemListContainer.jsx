import { getProducts } from '../../../services/services';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


function ItemListContainer() {

    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {

        getProducts(categoryId)
            .then((response) => {

                setProducts(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [categoryId])


 
    return (
        <div >
            <ItemList products={products} />
        </div>
    );

}

export default ItemListContainer;