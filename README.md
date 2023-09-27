# MotorEnLínea

MotorEnLínea is an ecommerce that offers cars and bikes products for sale. The project is created with the React library, using vite as a compilation tool. The styles were created with css module and bootstrap 5. Firestore at database.

## Table of Contents

1. [Description](#description)
3. [Characteristics](#characteristics)
5. [Requirements](#requirements)
6. [Installation](#installation)
7. [Use](#use)
8. [License](#license)

## Description

"MotorEnLinea is an e-commerce platform for buying and selling cars and motorcycles with prices in dollars, where you can purchase a product and generate an order that will be sent to the provided email along with its purchase ID."


## Characteristics

- Catalog of cars and bikes products.
- Filtering products by categories.
- Shopping cart and payment process.
- User registration with a form.
- Generation of orders and management of products in Firestore.


## Requirements

Before you start working on this project, make sure you meet the following requirements:

- **Node.js y npm:** You must have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

- **Git:** It is recommended to have Git installed to manage version control of your project. You can download it from [git-scm.com](https://git-scm.com/).


## Installation

Follow these steps to install and run the app:

1. Clone this repository to your local machine using Git: git clone https://github.com/gonreynoso/CoderHouseReactReynoso.git
2. Navigate to the project directory: cd CoderHouseReactReynoso\Client.
3. Install the project dependencies using npm: npm install.
4. Start the application: npm run dev.
The application should be available on localhost, in your web browser.

For correct operation, you must have your environment variables of the .env file set at Firestore from google:
  apiKey: import.meta.env.VITE_REACT_APP_apiKey,
  authDomain: import.meta.env.VITE_REACT_APP_authDomain,
  projectId: import.meta.env.VITE_REACT_APP_projectId,
  storageBucket: import.meta.env.VITE_REACT_APP_storageBucket,
  messagingSenderId: import.meta.env.VITE_REACT_APP_messagingSenderId,
  appId: import.meta.env.VITE_REACT_APP_appId.



## Use

The main section of the page has a list of all the products that the company offers, brought from the firebase database, firestore. The data for its use is found in the .env file, which is located in gitignore to protect sensitive data, the photos are saved in the project, in the public/img folder. The page has a navigation bar, where you have the options to filter products by category, "Autos", "Motos", the navigation bar also has a brand with the name MotorEnLinea, which when clicked takes you to the main page, all links created with react-router-dom. Each productCart has the image, the price, the add to cart button with a counter that allows you to add more than one product without exceeding the stock limit, and the name of each product, which is a link that when clicked takes you to the description of each one in particular, where the product detail appears, and the option to add it to the cart as in the productCart. To add the products, click the "Agregar al carrito" button, toastify was used to notify the added product. When adding products to the cart, the cart widget appears in the navbar with the number of products added, their description, their price and the total, it also has the option to delete the product, or delete one product at a time if there are more, with the trash can (react-icons). The cart has three buttons, "vaciar carrito", "ver mas productos" and "realizar compra". Once the desired products have been selected, click on "realizar compra" where there is a form with mandatory data that the customer must fill out and select the method. payment, once made, a sign is displayed that says that the purchase was successful, the purchase detail is shown and a tracking code is the ID of the order that is generated in Firebase at the end. 


## License

This is a project for educational purposes, so it does not have commercial functionality, nor does it offer sensitive data. All products are fictitious, cannot be used for commercial purposes.