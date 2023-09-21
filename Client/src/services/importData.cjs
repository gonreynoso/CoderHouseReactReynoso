const admin = require('firebase-admin');
const serviceAccount = require('./coderhouse-react-reynoso-firebase-adminsdk-onwas-336a1bf8d2.json'); // Ruta al archivo de credenciales

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const data = require('./data.json'); // Ruta al archivo JSON con tus datos

// Agregar los datos a Firestore
data.forEach((item) => {
  db.collection('products').add(item);
});
