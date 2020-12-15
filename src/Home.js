import React from "react";
import "./Home.css"
import Product from "./Product";

function Home() {

    return(
        <div className="home">
            <img 
            className="home__image"
            src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/08/11/10/twitch.jpg?width=640"
            alt=""
            />

            {/* Product id, title, price, rating, image */}
            <div className="home__row">
            <Product
                id="12334553"
                title="NETGEAR Wi-Fi Range Extender EX3700 - Coverage Up to 1000 Sq Ft and 15 Devices with AC750 Dual Band Wireless Signal Booster & Repeater (Up to 750Mbps..."
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61z5oOk5fzL._AC_SL1350_.jpg"
            />
             <Product
                id="754y4hge"
                title="amFilm Tempered Glass Screen Protector for Nintendo Switch 2017 (2-Pack)"
                price={7.88}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71W-MZaVVIL._AC_SL1500_.jpg"
            />
            </div>

            <div className="home__row">
            <Product
                id="46u48it"
                title="RUNMUS Gaming Headset for PS4, Xbox One, PC Headset w/Surround Sound, Noise Canceling Over Ear Headphones with Mic, Compatible with PS4, Xbox One, Switch,..."
                price={25.95}
                rating={2}
                image="https://images-na.ssl-images-amazon.com/images/I/81PtEw326aL._AC_SL1500_.jpg"
            />
             <Product
                id="tuuhdfi3"
                title="Fjallraven, Kanken Classic Backpack for Everyday, Graphite"
                price={72.00}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/71gjJZ4Df2L._AC_SL1500_.jpg"
            />
             <Product
                id="1854thgj"
                title="Alex Vando Mens Dress Shirts Regular Fit Long Sleeve Men Shirt"
                price={16.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71id%2BwwTw-L._AC_UX679_.jpg"
            />
            </div>

            <div className="home__row">
            <Product
                id="12334553"
                title="Dash DMW001RD Machine for Individual, Paninis, Hash Browns, & other Mini waffle maker, 4 inch, Red"
                price={29.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61xq8SNSERL._AC_SL1500_.jpg"
            />
            </div>
           
            {/* Product */}
        </div>
    )
}

export default Home