const admin = require('firebase-admin');
const serviceAccount = require('./firebase-admin-config.json'); // Ruta al archivo de credenciales

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Nombre de la colección que deseas borrar
const collectionName = 'items'; // Reemplaza con el nombre de tu colección


const db = admin.firestore();

const data = require('./data.json'); // Ruta al archivo JSON con tus datos

// Agregar los datos a Firestore
data.forEach((item) => {
  db.collection(collectionName).add(item);
})

