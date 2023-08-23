import styles from './ItemListContainer.module.css';
// import Counter from '../ItemCount/ItemCount';
import { getProducts } from '../../../asyncmock'
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemList/ItemList';


function ItemDetailContainer() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then((response) => {
                setProducts(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])



    return (
        <div className={styles.ItemDetailContainer}>
            <ItemList products={products} />

        </div>
    );

}

export default ItemDetailContainer;