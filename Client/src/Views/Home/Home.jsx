//eslint-disable-next-line
import React from 'react';
// import ItemListContainer from '../../Components/ItemListContainer/ItemListContainer';
import styles from './Home.module.css';


function Home() {
    return (
        <div className={styles.home}>

            <h1>Home</h1>
            {/* <ItemListContainer greetings={"Hola estoy en HOME"} /> */}
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eaque deleniti harum numquam illo magni suscipit, eligendi quidem molestias sed repellat beatae obcaecati. Adipisci vel veritatis consequatur, dolorem officia cumque!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eaque deleniti harum numquam illo magni suscipit, eligendi quidem molestias sed repellat beatae obcaecati. Adipisci vel veritatis consequatur, dolorem officia cumque!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eaque deleniti harum numquam illo magni suscipit, eligendi quidem molestias sed repellat beatae obcaecati. Adipisci vel veritatis consequatur, dolorem officia cumque!
            </p>
        </div>
    );
 
}

export default Home;