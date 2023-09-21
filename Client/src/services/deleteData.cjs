const admin = require('firebase-admin');
const serviceAccount = require('./coderhouse-react-reynoso-firebase-adminsdk-onwas-336a1bf8d2.json'); // Reemplaza con la ruta a tu archivo de credenciales de servicio

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Nombre de la colección que deseas borrar
const collectionName = 'products'; // Reemplaza con el nombre de tu colección

// Recuperar todos los documentos de la colección
db.collection(collectionName)
  .listDocuments()
  .then((documents) => {
    // Borrar cada documento de la colección
    const deletePromises = documents.map((document) => {
      return document.delete();
    });

    // Ejecutar todas las promesas de borrado en paralelo
    return Promise.all(deletePromises);
  })
  .then(() => {
    console.log(`Todos los documentos de la colección '${collectionName}' han sido borrados.`);
  })
  .catch((error) => {
    console.error(`Error al borrar documentos de la colección '${collectionName}':`, error);
  });
