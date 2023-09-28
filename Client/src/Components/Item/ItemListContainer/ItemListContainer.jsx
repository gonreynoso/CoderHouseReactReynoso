import { getProducts } from '../../../services/services';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


function ItemListContainer() {

    const [items, setItems] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {

        getProducts(categoryId)
            .then((response) => {

                setItems(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [categoryId])


 
    return (
        <div >
            <ItemList items={items} />
        </div>
    );

}

export default ItemListContainer;