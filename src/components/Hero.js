import React, {useEffect} from 'react';

import Sale from '../img/sale.png'
import {useDispatch, useSelector} from "react-redux";
import {getAbout} from "../redux/actions/actions";

const Hero = () => {
const dispatch = useDispatch()
useEffect(() => {
    dispatch(getAbout())
},[dispatch])
    const {allItems} = useSelector(s => s)

    return (
        <div className='container'>
                <img className='hero__img' src={Sale} alt=""/>
            {
               allItems.map(el => (
                   <img src={el.image} alt=""/>
               ))
            }

        </div>

    );
};

export default Hero;