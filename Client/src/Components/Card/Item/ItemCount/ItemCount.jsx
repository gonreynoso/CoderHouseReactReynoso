import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) setCount(count - 1);
    };

    return (
        <div className="Counter">
            <h1>Contador</h1>
            <div>
                <p>El contador está en: {count}</p>
                <button onClick={increment}>Incrementar</button>
                <button onClick={decrement}>Decrementar</button>
            </div>

        </div>
    )

}

export default Counter;