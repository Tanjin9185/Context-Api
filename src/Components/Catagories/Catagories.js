import React, { useContext, useEffect, useState } from 'react';
import { catagoryContext } from '../../App';
import CatagoryDetails from '../CatagoryDetails/CatagoryDetails';


const allProducts = [
    {name:'Lenovo', category:'laptop'}, {name:'Asus', category:'laptop'}, {name:'Dell', category:'laptop'},
    {name:'Samsung', category:'Mobile'}, {name:'Nokia', category:'Mobile'}, {name:'Apple', category:'Mobile'},
    {name:'cannon', category:'Camera'}, {name:'Nikkon', category:'Camera'}, {name:'Sony', category:'Camera'},
];


const Catagories = (props) => {
    const {count} = props;
    const [category] = useContext(catagoryContext);
    const [products, setProducts] = useState([]);
    console.log(category)
    useEffect(() => {
        const matchedProducts = allProducts.filter(pd => pd.category.toLowerCase() === category.toLowerCase());
        setProducts(matchedProducts);
    }, [category])

    return (
        <div>
            <h2>select your Catagories{category}</h2>
            {
                products.map(pd => <CatagoryDetails product={pd} ></CatagoryDetails>)
            }
            
        </div>
    );
};

export default Catagories;