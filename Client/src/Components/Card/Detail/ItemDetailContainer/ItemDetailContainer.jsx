import styles from './ItemDetailContainer.module.css';
import { getProductById } from '../../../../services/asyncmock'
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';


function ItemDetailContainer(id) {

    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProductById({id})
            .then((response) => {
                setProduct(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])



    return (
        <div className={styles.ItemDetailContainer}>
            <ItemDetail {...product} />

        </div>
    );

}

export default ItemDetailContainer;