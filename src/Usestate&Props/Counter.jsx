import React from "react";

import { useState } from "react";

function Counter({intialCount}) {

    const [count, setCount] = useState(intialCount);

    let Increment = () =>{
        setCount(count+1)
    }
    
    let Decrement = () =>{
        setCount(count-1);
    }

    let Double = () =>{
        setCount(count*2);
    }

    if(count%2 !== 0){
       console.log("odd") 
    }
    else{
        console.log("even")
    }

    // () => Decrement() === Decrement
    // (e) => Decrement(e) !== Decrement

    return (
        <>
            <h1>{count}</h1>
            {/* <h1>{intialCount}</h1> */}
            <button onClick={Increment}>Increase</button>
            <button onClick={Decrement}>Decrease</button>
            <button onClick={Double}>Double</button>
        </>
    );
}

export default Counter;