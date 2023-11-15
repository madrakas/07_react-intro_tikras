import { useState } from "react";



const counterStyle = {
    display: 'flex',
    gap: '1rem',
};

const buttonStyle = {
    padding: '1rem',
    fontSize: '4rem',
};

const NumberStyle = {
    padding: '1rem',
    fontSize: '2rem',
    lineHeight: '1rem',
    fontWeight: 'bold',
};

export function Counter() {
    const [count, setCount] = useState(0);
    
    function minus1() {
        setCount(count - 1);
    }
    
    function plus1() {
        setCount(count + 1);
    }

    function reset () {
        setCount(0);
    }

    return (
        <div style={counterStyle}>
            <button onClick={() => setCount(count - 3)} style={buttonStyle}>-3</button>        
            <button onClick={minus1} style={buttonStyle}>-</button>        
            <div style={NumberStyle}>{count}</div>
            <button onClick={plus1} style={buttonStyle}>+</button>
            <button onClick={() => setCount(count + 3)} style={buttonStyle}>+3</button>
            <button onClick={reset} style={buttonStyle}>Reset</button>
            
        </div>
    );
}