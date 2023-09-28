import { 
  doc, 
  getDoc, 
  collection, 
  getDocs, 
  getFirestore, 
  query, 
  where } from 'firebase/firestore';


  export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
      const db = getFirestore();
      const itemDoc = doc(db, 'items', id);
  
      getDoc(itemDoc)
        .then((doc) => {
          if (doc.exists()) {
            resolve({ id: doc.id, ...doc.data() });
          } else {
            resolve(null);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  
  
  export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
     
        const db = getFirestore();
  
        const itemCollection = collection(db, 'items');
  
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
  };
  
  


//producto por id

export const getProductById = (categoryId) => {
  return new Promise((resolve, reject) => {
    const db = getFirestore();
    const itemDoc = doc(db, 'items', categoryId);

    getDoc(itemDoc)
      //existe producto
      .then((doc) => {
        if (doc.exists()) {
          resolve({ categoryId: doc.categoryId, ...doc.data() });
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


