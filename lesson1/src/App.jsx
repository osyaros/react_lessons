import { useState } from "react";
import { DisplyaValue } from "./DisplayValue";


export const App = () =>{ 
    const welcome_text = "Hello World"
    const [counterValue, setCounterValue] = useState(0);
    const minus = () =>
    {
        setCounterValue(counterValue-1);
    }
    const plus = () => 
    {
        setCounterValue(counterValue+1);
    }
    return (
    <main>
        <button onClick={minus}>-</button>
        <DisplyaValue value={counterValue}/>
        <button onClick={plus}>+</button>
    </main>
    )

}