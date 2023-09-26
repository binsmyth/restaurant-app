import React, { useState } from 'react';

const Counter = (props) =>{
    return(
        <div>
            <button onClick={() => props.increase()}>+</button>
            <span>{props.count}</span>
            <button onClick={() => props.decrease()}>-</button>
        </div>
    )
}

export default Counter;