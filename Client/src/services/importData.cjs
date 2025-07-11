const admin = require('firebase-admin');
const serviceAccount = require('./firebase-admin-config.json'); // Ruta a tu archivo de credenciales

// Inicializar la app de Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const collectionName = 'items'; // Nombre de tu colección
const data = require('./data.json'); // Tu archivo con los datos

// Función principal para cargar los datos
const uploadData = async () => {
  try {
    const batch = db.batch();

    data.forEach((item) => {
      const docRef = db.collection(collectionName).doc(); // Crea un ID automático
      batch.set(docRef, item);
    });

    await batch.commit();
    console.log(`✅ Se cargaron ${data.length} documentos en la colección '${collectionName}'`);
  } catch (error) {
    console.error('❌ Error al cargar los datos:', error);
  }
};

uploadData();
