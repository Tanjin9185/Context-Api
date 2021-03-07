import React, { useContext } from 'react';
import { catagoryContext } from '../../App';

const Shipment = () => {
    const [count, setCount] = useContext(catagoryContext);
    return (
        <div>
            <h1>This is a shipment</h1>
            <button onClick={() => setCount(count+1)}>shiping add</button>
        </div>
    );
};

export default Shipment;