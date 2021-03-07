import React, { useContext } from 'react';
import { catagoryContext } from '../../App';


const CatagoryDetails = (props) => {
    const {count} = props;
    const category = useContext(catagoryContext);
    const {name} = props.product;
    return (
        <div>
            <h4>This Catagory Details {count}</h4>
            <h6>{category}</h6>
            <h6>select product {name}</h6>
        </div>
    );
};

export default CatagoryDetails;