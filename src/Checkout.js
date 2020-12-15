import React from "react";
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider"
import CurrencyFormat from "react-currency-format"
import Subtotal from "./Subtotal";

function Checkout() {

    const [{ basket }] = useStateValue()
    return(
        <div className="checkout">
            <div className="checkout__left">
           
         <img className="checkout__ad" src="https://wearegrowthhack.com/wp-content/uploads/2020/06/amazon_advertising_news_bild_1600x800_1-1400x600@2x-2-1.png" alt="" />
            { basket?.length === 0 ? (
                <div className="checkout__empty">
                    <h1>Your Shopping Basket is empty</h1>
                    <p>You have no item in your basket. To buy one or more items,
                     click "Add to basket" next to the item.</p>
                </div>
                ) : (
                <div className="checkout__title">
                    <h1>Your Shopping Basket</h1>
                    {basket.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />))}
                </div>
                )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout