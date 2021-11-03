import React from 'react';
import './Button.css';

function Button(props: any) {
    return (
            <img src="./logo192.png"
                 alt="Chernoff"
                 onClick={myfunction}
                 style={{width: '10vh', height: '10vh', position: 'relative', top: props.top, left: props.left}}/>
    );
}

function myfunction() {
    console.log("CLICKED");
}

export default Button;
