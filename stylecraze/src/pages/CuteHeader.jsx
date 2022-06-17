import React from 'react'
import { Footer } from '../components/Footer'
import { Bottom } from './Bottom'
import { HairCare } from './HairCare'
import { Skin } from './Skin'
import { Testimonials } from './Testimonials'

export const CuteHeader = () => { 
    
  return (
    <div>   <div id="SanOne">
            <div class="SanOne-div"><img src="https://cdn2.stylecraze.com/wp-content/uploads/2017/08/A-Useful-Guide-To-Picking-Sunglasses-For-Your-Face-Shape-2.jpg.webp"/>
                <p className="Lelo">A Useful Guide To Picking Sunglasses For Your Face Shape</p></div>
            <div class="SanOne-div"><img src="https://cdn2.stylecraze.com/wp-content/uploads/2017/08/How-To-Mix-And-Match-Colors-In-Your-Clothes--The-Ultimate-Color-Wheel-Guide-2.jpg.webp"/>
                <p className="Lelo">Amazing Prom Makeup Ideas And Tips To Follow In 2022</p></div>
            <div class="SanOne-div"><img src="https://cdn2.stylecraze.com/wp-content/uploads/2017/08/How-To-Do-Ombre-Nails-Like-A-Pro-Tutorial-With-Pictures-2.jpg.webp"/>
                <p className="Lelo">21 Best Fruit And Vegetable Juices For Healthy And Glowing Skin</p></div>
        </div>
        
      
      <Bottom/>
      <HairCare/>
      <Skin/>
      <Testimonials/>
      <Footer/>
    </div>


    

  )
}
