import styles from "./Item.module.css"
import { useState, useEffect } from "react";
import { collection , getDocs , getFirestore} from "firebase/firestore"


const Item = () => {

  const [item , setItem] = useState([])

  const db = getFirestore();

  const itemCollection = collection(db, "products");

  return(
    <div className={styles.list}>
      
    </div>

  )

}



export default Item;

  /*  */
