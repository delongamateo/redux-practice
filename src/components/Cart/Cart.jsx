import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';

export default function Cart() {

    const [items, setItems] = useState([]);

    const dispatch = useDispatch();

    const selectCartProducts = state => {
        return state.cart.products;
    }

    const products = useSelector(selectCartProducts);

    const clearTheCart = event => {
        event.preventDefault();

        dispatch({
            type: 'cart/clear'
        })
    }

    return (
        <div className="cart">

            <button onClick={clearTheCart}>Clear Cart</button>

        </div>
    )
}
