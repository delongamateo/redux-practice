import React from 'react'
import {useDispatch, useSelector} from 'react-redux';

export default function Product(props) {

    const dispatch = useDispatch();

    const addToCart = event => {
        event.preventDefault();

        dispatch({
            type: "cart/addProduct",
            payload: props.id
        })
    }

    const amount_in_cart = useSelector(state =>{
        let amount = 0;
        state.cart.products.forEach(product_id => {
            if (product_id === props.id) {
                amount++
            }
        })
        return amount;
    })

    return (

        <div className="product-list__product product">

            <img className="product__image" src={ props.img_url } alt={ props.name } />

            <div className="product__name">{ props.name }</div>

            <button onClick={addToCart} className="product__add-to-cart">Add to cart</button>

            {amount_in_cart ? (
                <div className="product__amount-in-cart">{amount_in_cart} already added</div>
            ) : ""
            }

        </div>
    )
}

