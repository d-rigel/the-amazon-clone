import React from 'react'
import { useStateValue } from "./StateProvider"
import "./CheckoutProduct.css"

function CheckoutProduct({ id, price, title, rating, image}) {

    const [{ basket }, dispatch] = useStateValue()

    const RemoveFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            payload: id
        })
        console.log(id)
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />

            <div className="checkoutProduct__info">
             <p className="checkoutProduct__title">{title}</p>

             <p className="checkoutProduct__price">
                 <small>$</small>
                 <strong>{price}</strong>
             </p>

             <div className="checkoutProduct__rating">
                 {Array(rating)
                 .fill()
                 .map((_, i) => (
                     <p>🌟</p>
                 ))}
             </div>
             <button onClick={ RemoveFromBasket }>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
