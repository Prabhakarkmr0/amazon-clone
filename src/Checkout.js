import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from "./Subtotal"

function Checkout() {

    const[{basket,user},dispatch]=useStateValue()

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/Xiaomi/GW_Hero/Mi10i/Updated/D20260583_WLD_Jan_Art_Xiaomi_Mi105G_Mob-hero_1242x550_2._CB662168030_SY250_.jpg" alt=""/>
            
            <div>
                <h3>Hello, {user.email}</h3>
                <h2 className="checkout__title">
                    Your Shopping Basket
                </h2>
                {
                    basket.map(item=>(
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}

                        />
                    ))

                }
            </div>
            </div>
            <div className="checkout__right">
               <Subtotal />
            </div>
            
        </div>
    )
}

export default Checkout
