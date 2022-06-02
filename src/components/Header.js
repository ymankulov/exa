import React from 'react';
import Book from  '../img/BOOKShop.svg'
import Shop from '../img/image 160 (Traced).svg'
import '../styles/Header.css'


const Header = () => {
    return (
        <header id='header'>
           <div className='container'>
               <div className='header'>
                   <div>
                       <a href=""><img  src={Book} alt=''/></a>
                   </div>
                   <div className='shop'>
                           <img  src={Shop} alt=""/>
                       <h4 className='shop__title'>Корзина</h4>
                   </div>
               </div>

            </div>
        </header>
    );
};

export default Header;