import React from 'react';
import useCartStore from '../store/useCartStore';
import { useNavigate  } from 'react-router';

export const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav>
            <button onClick={() => navigate('/')}></button>
            <div>
                <button onClick={() => navigate('/')}></button>
                <button onClick={() => navigate('/cart')}>cart</button>
            </div>
        </nav>
    )
}

export default Navbar;