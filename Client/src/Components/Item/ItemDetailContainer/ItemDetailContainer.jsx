import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../../services/services";
import ItemDetail from "../ItemDetail/ItemDetail";

//* Hacemos la logica del itemDetail

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getProductById(id)


      .then((response) => {
        setItem(response);
      })
      .catch(() => {
        setItem(null);
      })

  }, [id]);


  return (
    <div>
      <ItemDetail item={item} />
    </div>

  )
};

export default ItemDetailContainer;