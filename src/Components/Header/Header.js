import React, { useState } from 'react';

const Header = (props) => {
    const {count, setCount} = props;
    return (
        <div>
            <h1>This is a header {count}</h1>
            <button onClick={()=> setCount('Laptop')}>Laptop</button>
            <button onClick={()=> setCount('Mobile')}>Mobile</button>
            <button onClick={()=> setCount('Camera')}>Camera</button>

        </div>
    );
};

export default Header;