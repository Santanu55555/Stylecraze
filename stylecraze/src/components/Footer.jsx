import React from 'react'
import './footer.css'

export const Footer = () => {
  return (
   <div>
     <div id='Albert'>
      <div className='Nrupul'><p>About Us</p>
      <p>Image Usage Policy</p>
      <p>Contact Us</p>
      <p>Editorial Guidelines</p>
      <p>Join Our Medical Board</p>
      <p>Press Room</p></div>

      <div className='Nrupul'><p> Advertise With Us</p>
      <p> Privacy Policy</p>
      <p> Terms Of Use</p>
      <p> Affiliate Disclosure</p>
      <p> Cookie Policy</p></div>

      <div>
          <div><p>Follow us</p></div>
          <div id="Hitler"><img className='Romeo' style={{marginTop: '30px'}} src="https://www.stylecraze.com/wp-content/themes/buddyboss-child/images/svg-image/facebook-f.svg" alt="" /><img  className='Romeo' style={{marginTop: '30px'}} src="https://www.stylecraze.com/wp-content/themes/buddyboss-child/images/svg-image/pinterest-p.svg" alt="" /><img  className='Romeo' style={{marginTop: '30px'}}  src="https://www.stylecraze.com/wp-content/themes/buddyboss-child/images/svg-image/twitter.svg" alt="" /><img  className='Romeo' style={{marginTop: '30px'}} src="https://www.stylecraze.com/wp-content/themes/buddyboss-child/images/svg-image/instagram.svg" alt="" /></div>
          <div><img  className='Romeo'style={{marginTop: '30px'}} src="https://www.stylecraze.com/wp-content/themes/buddyboss-child/images/svg-image/youtube.svg" alt="" /></div>
      </div>

      <div className='Nrupul'>
        <h3>Our Sister Sites</h3>
        <p>MomJunction</p>
        <p>The BridalBox</p>
        <p>Skinkraft</p>
        <p>Vedix</p>
      </div>
 
    </div>
         <div style={{backgroundColor:'rgb(229, 229, 229)',lineHeight:'18px'}}>
      <p style={{ display:'flex',marginLeft:'27%',marginBottom:"-20px"}}>Copyright © 2011 - 2022 <p style={{fontWeight: 'bold',marginTop:'0px',color:'#f67'}}>IncNut Stylecraze Private Limited</p>. All rights reserved.</p>
      <p style={{fontSize:"12px"}}>StyleCraze provides content of general nature that is designed for informational purposes only. The content is not intended to be a substitute for professional medical advice, diagnosis, or treatment.</p>
      <p style={{fontSize:"10px",marginRight:"80%",color:'#f67'}}>Click here for additional information .</p>
      </div>
   </div>
  )
}
