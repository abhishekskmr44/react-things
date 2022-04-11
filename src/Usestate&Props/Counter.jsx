import React from "react";

import { useState } from "react";

function Counter({intialCount}) {

    const [count, setCount] = useState(intialCount);

    // console.log(count);
    // if(count%2 == 1){
    //     <h1 style = {{backgroundColor:"red"}}>{count}</h1>
    // }
    // else{

    // }

    let Increment = () =>{
        setCount(count+1)
    }
    
    let Decrement = () =>{
        setCount(count-1);
    }

    let Double = () =>{
        setCount(count*2);
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