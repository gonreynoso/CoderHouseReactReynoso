const products = [
  {

    product_id: "1",
    name: 'Auto Deportivo Veloz:',
    price: 100,
    description: 'Mercedes Benz 9873 con diseño aerodinámico corta el viento mientras su motor rugiente acelera de 0 a 100 km/h en segundos.',
    image: 'https://picsum.photos/200/300',
    category: 'autos'
  },
  {

    product_id: "2",
    name: 'Camioneta Todoterreno Resistente',
    price: 200,
    description: 'tracción en las cuatro ruedas y una estructura robusta, esta camioneta todoterreno es perfecta para aventuras fuera de la carretera.',
    image: 'https://picsum.photos/200/300',
    category: 'camionetas'
  },
  {

    product_id: "3",
    name: 'Auto Compacto Urbano',
    price: 200,
    description: 'Navega por las calles congestionadas de la ciudad con estilo en este auto compacto. ',
    image: 'https://picsum.photos/200/300',
    category: 'lujo'
  },
  {

    product_id: "4",
    name: 'Camioneta de Lujo de Lujo',
    price: 200,
    description: 'Con acabados de alta gama y comodproduct_idades de primera clase, esta camioneta de lujo redefine el viaje.',
    image: 'https://picsum.photos/200/300',
    category: 'camionetas'
  },
  {

    product_id: "5",
    name: 'Auto Clásico de Colección',
    price: 200,
    description: 'Este auto clásico evoca nostalgia y elegancia atemporal. Sus líneas elegantes y detalles cuidadosamente conservados hacen que sea un objeto de admiración en cualquier lugar al que vaya.',
    image: 'https://picsum.photos/200/300',
    category: 'lujo'
  },
  {
    
    product_id: "6",
    name: 'Camioneta Compacta Versátil',
    price: 200,
    description: 'Perfecta para aventuras urbanas y escapadas de fin de semana, esta camioneta compacta ofrece versatilidad en un paquete pequeño. ',
    image: 'https://picsum.photos/200/300',
    category: 'autos'
  },
];



//traer productos por categoria o todos
export const getProducts = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productsFiltered = category
        // Si category existe filtramos por categoría
        ? products.filter((product) => product.category === category)
        // Si category no existe devolvemos todos los productos
        : products;

      resolve(productsFiltered);
    }, 500);

  });
}



//producto por id

export const getProductById = (product_id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // buscamos el producto por id
      const product = products.find((product) => product.product_id === product_id);


      //existe producto
      if (product) {
        resolve(product);
      } else
        //no existe producto
        reject("No existe el producto");
    }, 500);
  });
}