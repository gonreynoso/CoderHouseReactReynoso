// services/services.js
import {
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where
} from 'firebase/firestore';

import { db } from '../main'; // Cambiá esto a la ruta donde exportás `db`

// 🔹 Obtener un solo producto por ID
export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    const itemDoc = doc(db, 'items', id);

    getDoc(itemDoc)
      .then((doc) => {
        if (doc.exists()) {
          resolve({ id: doc.id, ...doc.data() });
        } else {
          resolve(null);
        }
      })
      .catch(reject);
  });
};

// 🔹 Obtener todos los productos o filtrados por categoría
export const getProducts = (categoryId) => {
  return new Promise((resolve, reject) => {
    const itemCollection = collection(db, 'items');
    let q = itemCollection;

    // ⚠️ Asegurate de que el campo exista en Firestore
    if (categoryId) {
      q = query(itemCollection, where('categoryId', '==', categoryId));
    }

    getDocs(q)
      .then((querySnapshot) => {
        const products = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        resolve(products);
      })
      .catch(reject);
  });
};
