const products = [
  { 
    id: 1,
    name: 'Product 1',
    price: 100,
    description: 'Product 1 description',
    image: 'https://picsum.photos/200/300'
  },
  {
    id: 2,
    name: 'Product 2', 
    price: 200,
    description: 'Product 2 description',
    image: 'https://picsum.photos/200/300'
  },
  {
    id: 3,
    name: 'Product 3', 
    price: 200,
    description: 'Product 2 description',
    image: 'https://picsum.photos/200/300'
  },
  {
    id: 4,
    name: 'Product 4', 
    price: 200,
    description: 'Product 2 description',
    image: 'https://picsum.photos/200/300'
  },
  {
    id: 5,
    name: 'Product 5', 
    price: 200,
    description: 'Product 2 description',
    image: 'https://picsum.photos/200/300'
  },
  {
    id: 6,
    name: 'Product 6', 
    price: 200,
    description: 'Product 2 description',
    image: 'https://picsum.photos/200/300'
  },
];



export const getProducts = (category) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const productsFiltered = category 
      ? products.filter((product) => product.category === category)
      : products;

      resolve(productsFiltered);
    }, 1000);

  });
}



//producto por id
export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((product) => product.id === id);
      //existe producto
      if(product){
        resolve(product);
      }else
      //no existe producto
      resolve(product);
    }, 1000);
  });
}