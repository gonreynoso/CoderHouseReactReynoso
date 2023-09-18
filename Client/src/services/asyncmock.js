import { 
  doc, 
  getDoc, 
  collection, 
  getDocs, 
  getFirestore, 
  query, 
  where } from 'firebase/firestore';


//traer productos por categoria o todos
export const getProducts = (categoryId) => {
  return new Promise((resolve, reject) => {

    const db = getFirestore();

    const itemCollection = collection(db, 'products');

    let q;

    if (categoryId) {
      q = query(itemCollection, where("categoryId", "==", categoryId));
    } else {
      q = query(itemCollection);
    }

    getDocs(q)
      .then((querySnapshot) => {
        const products = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        resolve(products)
      })

      .catch((error) => {
        reject(error);
      });
  });
}


//producto por id

export const getProductById = (product_id) => {
  return new Promise((resolve, reject) => {
    const db = getFirestore();
    const itemDoc = doc(db, 'products', id);

    getDoc(itemDoc)
      //existe producto
      .then((doc) => {
        if (doc.exists()) {
          resolve({ id: doc.id, ...doc.data() });
          //no existe producto
        } else {
          resolve(null);
        }
      })
      .catch((error) => {
        reject(error);
      });

  });
}


