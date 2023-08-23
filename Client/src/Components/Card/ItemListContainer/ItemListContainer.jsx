import styles from './ItemListContainer.module.css';
// import Counter from '../ItemCount/ItemCount';
import { getProducts } from '../../../asyncmock'
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';


function ItemListContainer() {

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
        <div className={styles.ItemListContainer}>
            <ItemList products={products} />

        </div>
    );

}

export default ItemListContainer;