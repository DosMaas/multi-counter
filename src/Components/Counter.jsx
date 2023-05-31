import { useState } from "react";

function Label(props) {

    return (
        <span>Counter {props.count}</span>
    )

};

export function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount( count + 1);
    };
    
    return (
        <div>
            <Label count = {count} />
            <button onClick={increment}>Increment</button>
        </div>
    )

}

