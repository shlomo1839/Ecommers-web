import React from 'react';
import useCartStore from '../store/useCartStore';
import { useNavigate  } from 'react-router';

export const Navbar = () => {
    const navigate = useNavigate();
    const totalItems = useCartStore((state) => state.getTotalItems());


    return (
        <nav>
            <button onClick={() => navigate('/')}>STARTER STORE</button>
            <div>
                <button onClick={() => navigate('/')}>Shop</button>
                <button onClick={() => navigate('/cart')}>Cart {totalItems}</button>
            </div>
        </nav>
    )
}



export default Navbar;