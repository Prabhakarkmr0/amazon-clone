import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                
                <img className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/JanART/GW2021/T1a/T1b/Jan-ART_DesktopHero_rec_1x_shop-now._CB661928264_.jpg" alt="" />
           
            <div className="home__row">
                <Product id="12345" title="watch" price={200} image="https://m.media-amazon.com/images/I/5114a8X6iHL.__AC_SY200_.jpg" rating={5}/>
                <Product id="12344" title="watch" price={200} image="https://m.media-amazon.com/images/I/5114a8X6iHL.__AC_SY200_.jpg" rating={5}/>
                
            </div>

            <div className="home__row">
                <Product id="12343" title="watch" price={200} image="https://m.media-amazon.com/images/I/5114a8X6iHL.__AC_SY200_.jpg" rating={5}/>
                <Product id="12342" title="watch" price={200} image="https://m.media-amazon.com/images/I/5114a8X6iHL.__AC_SY200_.jpg" rating={5}/>
                <Product id="12341" title="watch" price={200} image="https://m.media-amazon.com/images/I/5114a8X6iHL.__AC_SY200_.jpg" rating={5}/>
                    
            </div>

            <div className="home__row">
                <Product id="12340" title="watch" price={200} image="https://m.media-amazon.com/images/I/5114a8X6iHL.__AC_SY200_.jpg" rating={5}/>
                
            </div>

            </div>
        </div>
    )
}

export default Home
