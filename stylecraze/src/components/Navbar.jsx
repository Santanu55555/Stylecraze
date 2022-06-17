import React from 'react'
import './navbar.css'
// import './Hitler.scss'
 import {useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
 
export const Navbar = () => {

  // const [toggle,setToggle]=useState(false)



//   // const ref = useRef(null);

  // toggleMakeUp(ref.current)
  // useEffect(()=>{
  //   // const kantaLage=ref.current
   
  //     toggleMakeUp(ref.current)
    
  // })
  // const a=1;
  // if(a===1){
    useEffect(()=>{
      const toggleMakeUp=(element)=> {
        element.style.display = "block";
        element.addEventListener("mouseover", () => {
          element.style.display = "block";
        });
        element.addEventListener("mouseout", () => {
          element.style.display = "none";
        });}
      
        const toggleMakeUpOff=(element)=> {
        element.style.display = "none";
      }
  
      var makeup = document.getElementById("makeup-dropdown");
      var one = document.getElementById("pehla");
      
      if(one){
      one.addEventListener("mouseover", () => {
        toggleMakeUp(makeup);
      });
      one.addEventListener("mouseout", () => {
        toggleMakeUpOff(makeup);
      });
      }
      var bottle= document.getElementById("panchwa")
      
      if(bottle){
      bottle.addEventListener("mouseover", () => {
        toggleMakeUp(makeup);
      });
      bottle.addEventListener("mouseout", () => {
        toggleMakeUpOff(makeup);
      });
      }
      
      var haircare = document.getElementById("haircare-dropdown")
      
       var down = document.getElementById("dusra");
      
       if(down){
      
      down.addEventListener("mouseover", () => {
        toggleMakeUp(haircare);
      });
      down.addEventListener("mouseout", () => {
        toggleMakeUpOff(haircare);
      });
       }
      var sixth = document.getElementById("chatha");
      
       if(sixth){
      
      sixth.addEventListener("mouseover", () => {
        toggleMakeUp(haircare);
      });
      sixth.addEventListener("mouseout", () => {
        toggleMakeUpOff(haircare);
      });
       }
      
      
      var skincare = document.getElementById("skincare-dropdown");
      
      var bob = document.getElementById("tisra");
      
      
      if(bob){
      bob.addEventListener("mouseover", () => {
        toggleMakeUp(skincare);
      });
      bob.addEventListener("mouseout", () => {
        toggleMakeUpOff(skincare);
      });
      }
      var seventh = document.getElementById("satwa");
      
      
      if(seventh){
      seventh.addEventListener("mouseover", () => {
        toggleMakeUp(skincare);
      });
      seventh.addEventListener("mouseout", () => {
        toggleMakeUpOff(skincare);
      });
      }
      
      var hairstyle = document.getElementById("hairstyle-dropdown");
      var Marle = document.getElementById("chautha");
      
      
      if(Marle){
      Marle.addEventListener("mouseover", () => {
        toggleMakeUp(hairstyle);
      });
      Marle.addEventListener("mouseout", () => {
        toggleMakeUpOff(hairstyle);
      });
      }
      var eighth = document.getElementById("athwa");
      
      
      if(eighth){
      eighth.addEventListener("mouseover", () => {
        toggleMakeUp(hairstyle);
      });
      eighth.addEventListener("mouseout", () => {
        toggleMakeUpOff(hairstyle);
      });
      }
      
      var aboutus = document.getElementById("about-us-dropdown");
      var sunoDilKi = document.getElementById("HumareBareme");
      
      if(sunoDilKi){
      sunoDilKi.addEventListener("mouseover", () => {
        toggleMakeUp(aboutus);
      });
      sunoDilKi.addEventListener("mouseout", () => {
        toggleMakeUpOff(aboutus);
      });
      }
      
      
      
    })
   
    
const navigate=useNavigate()    
  
  

  

  return (
    
    <div id="navu">
        <div><img onClick={()=>navigate('/')} src='https://cdn2.stylecraze.com/wp-content/themes/buddyboss-child/images/sc-logo.png' /></div>
        <div><nav>
    <div className="main-container">
      <ul>
        <li>
          <div id = "pehla"  onClick={()=>navigate("/makeup")}>Make up</div  >
<div>
          <div className="main-flex main-dropdown-div"   id="makeup-dropdown">
            <ul className="main-flex">
              <li>
                <div id = "bridal-makeup"> Bridal Makeup</div>
              </li>
              <li>
                <div id="celebrity-makeup">Celebrity Makeup</div>
              </li>
              <li><div id="eye-makeup">Eye Make up</div></li>
              <li><div id="face-make-up">Face Makeup</div></li>
              <li><div>Lip Make up</div></li>
              <li><div>Makeup Ideas</div></li>
              <li><div>Mehandi Designs</div></li>
              <li><div>Nail Art</div></li>
            </ul>
            <ul className="main-flex" id="make-up-submenu">
              <li>
                <div                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2014/12/1150-60-Best-Indian-Bridal-Makeup-Tips-267x300.jpg.webp"
                    alt=""
                  /><span>Top 5 VLCC Bridal Makeup Packages</span></div>
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2013/09/750-Top-10-Lakme-Bridal-Salon-Packages-267x300.jpg.webp"
                    alt=""
                  /><span
                    >How To Apply Bridal Eye Makeup Perfectly?</span                  ></div>
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2014/03/41-Top-5-Keya-Seth%E2%80%99s-Bridal-Makeup-Packages-267x300.jpg.webp"
                    alt=""
                  /><span
                    >Look Perfect For Your Special Day – Bridal Makeup Tips
                    For Dry Skin!</span                  ></div                >
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2014/09/2073-Top-5-Naturals-Salon-Bridal-Makeup-Packages-is-267x300.jpg.webp"
                    alt=""
                  /><span>Top 10 Bridal Makeup Packages In India</span></div                >
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2013/07/750-Top-10-Lakme-Bridal-Salon-Packages-267x300.jpg.webp"
                    alt=""
                  /><span>Top 10 Lakme Bridal Salon Packages</span></div                >
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2012/10/Look-Perfect-For-Your-Special-Day-Bridal-Makeup-Tips-For-Dry-Skin-267x300.jpg.webp"
                    alt=""
                  /><span
                    >Best Bridal Makeup Kits Available In India - Our Top
                    10</span
                  ></div                > 
              </li>
            </ul>
            <div className="findmore">Find More</div>
          </div>
          
    
            </div>
         </li>
       
        <li>
          <div
            id = "dusra"
            onClick={()=>navigate('/haircare')}
            >hair care</div>
          <div className="main-flex main-dropdown-div" id="haircare-dropdown">
            <ul className="main-flex">
              <li><div>Basic Hair Care</div></li>
              <li><div>Dandruff</div></li>
              <li><div>Dry Hair Care</div></li>
              <li><div>Hair Care Ideas</div></li>
              <li><div>Hair Care Solutions</div></li>
              <li><div>Hair Colour</div></li>
              <li><div>Hair Fall</div></li>
              <li><div>Hair Growth</div></li>
            </ul>
            <ul className="main-flex">
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2012/08/Ultra-Shiny-And-Glossy-Hair-Secrets-No-One-Tells-267x300.jpg.webp"
                    alt=""
                  /><span
                    >5 Best Hair Products For Indian Hair To Try In
                    2021</span
                  ></div                >
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/10-Best-Homemade-Conditioners-For-Curly-Hair-267x300.jpg.webp"
                    alt=""
                  /><span
                    >Hair Straightening Vs. Hair Smoothing: Differences,
                    Side Effects, And..</span                  ></div                >
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2013/01/1721_12-Simple-Black-Hair-Care-Tips_iS-267x300.jpg.webp"
                    alt=""
                  /><span
                    >Best Shower Tips To Keep Your Hair Healthy</span                  ></div
                >
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2013/01/How-To-Pamper-Your-Hair-With-A-Hot-Oil-Massage-To-Prevent-Hair-Loss-267x300.jpg"
                    alt=""
                  /><span
                    >How To Pamper Your Hair With A Hot Oil Massage To
                    Prevent Hair Loss</span                  ></div                >
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/3159_How-To-Take-Proper-Care-Of-Your-Hair_iS-267x300.jpg"
                    alt=""
                  /><span>How To Take Proper Care Of Your Hair?</span></div                >
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/How-To-Use-Amla-For-Hair-Growth-4-267x300.jpg"
                    alt=""
                  /><span>How To Use Amla For Hair Growth</span></div                >
              </li>
            </ul>
            <div className="findmore">Find More</div>
          </div>
        </li>
        <li>
          <div
            id="tisra"
            >skin care</div   >
          <div className="main-flex main-dropdown-div" id="skincare-dropdown">
            <ul className="main-flex">
              <li><div>Acne</div></li>
              <li><div>Anti Ageing</div></li>
              <li><div>Beauty Secrets</div></li>
              <li><div>Dry Skin</div></li>
              <li><div>Face Care Tips</div></li>
              <li><div>Homemade Tips</div></li>
              <li><div>Oily Skin</div></li>
              <li><div>Perfumes</div></li>
              <li><div>Skin Care Ideas</div></li>       
            </ul>
            <ul className="main-flex">
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2013/01/Top-10-Acne-Control-Products-267x300.jpg.webp"
                    alt=""
                  /><span>Top 5 VLCC Bridal Makeup Packages</span></div                >
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/1639-Bust-Away-Pimples-6-Drugstore-Face-Packs-For-Pimple-Prone-Skin--267x300.jpg.webp"
                    alt=""
                  /><span
                    >How To Apply Bridal Eye Makeup Perfectly?</span                  ></div                >
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2013/10/How-To-Get-Rid-Of-Heat-Pimples-Naturally-1-267x300.jpg.webp"
                    alt=""
                  /><span
                    >Look Perfect For Your Special Day – Bridal Makeup Tips
                    For Dry Skin!</span                  ></div                >
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2018/11/15-Best-Pimple-Patches-For-Pimple-Free-Spotless-Skin-Banner-267x300.jpg.webp"
                    alt=""
                  /><span>Top 10 Bridal Makeup Packages In India</span></div                >
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2013/12/40-Top-10-Topical-Medicinal-Creams-To-Treat-Your-Pimples_237515920-267x300.jpg.webp"
                    alt=""
                  /><span>Top 10 Lakme Bridal Salon Packages</span></div                >
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2014/11/7-Simple-Ways-To-Use-Banana-Peel-To-Treat-Acne-267x300.jpg.webp"
                    alt=""
                  /><span
                    >Best Bridal Makeup Kits Available In India - Our Top
                    10</span
                  ></div                >
              </li>
            </ul>
            <div className="findmore">Find More</div>
          </div>
        </li>
        <li>
          <div
            id="chautha"
            >hair styles</div          >
          <div className="main-flex main-dropdown-div" id="hairstyle-dropdown">
            <ul className="main-flex">
              <li><div>Bridal Makeup</div></li>
              <li><div>Celebrity Makeup</div></li>
              <li><div>Eye Make up</div></li>
              <li><div>Face Makeup</div></li>
              <li><div>Lip Make up</div></li>
              <li><div>Makeup Ideas</div></li>
              <li><div>Mehandi Designs</div></li>
              <li><div>Nail Art</div></li>
            </ul>
            <ul className="main-flex">
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2015/03/10-Stylish-Bob-Hairstyles-For-Oval-Faces-1-267x300.jpg.webp"
                    alt=""
                  /><span>Top 5 VLCC Bridal Makeup Packages</span></div                >
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2014/02/Top-10-Japanese-Short-Bob-Hairstyles-You-Should-Try-267x300.jpg.webp"
                    alt=""
                  /><span
                    >How To Apply Bridal Eye Makeup Perfectly?</span                  ></div                >
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2014/01/Latest-And-Most-Popular-Messy-Bob-Hairstyles-For-Women-267x300.jpg.webp"
                    alt=""
                  /><span
                    >Look Perfect For Your Special Day – Bridal Makeup Tips
                    For Dry Skin!</span                  ></div                >
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2014/01/50-Most-Popular-Bob-Shaped-Hairstyles-267x300.jpg.webp"
                    alt=""
                  /><span>Top 10 Bridal Makeup Packages In India</span></div                >
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2014/01/20-Stunning-Bob-Haircuts-With-Bangs-1-267x300.jpg.webp"
                    alt=""
                  /><span>Top 10 Lakme Bridal Salon Packages</span></div                >
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2015/05/Chic-Feathered-Hairstyles-Banner-267x300.jpg.webp"
                    alt=""
                  /><span
                    >Best Bridal Makeup Kits Available In India - Our Top
                    10</span
                  ></div                >
              </li>
            </ul>
            <div className="findmore">Find More</div>
          </div>
        </li>
      <li><div
          id="panchwa"
            
            >health and wellness</div          >
       </li>
        <li>  <div
          id="chatha"
            >news</div          ></li>
          <li>  <div  id="satwa">tools</div></li>
          
           
     
        
       
     
        
        
        <li><div id="athwa">products</div></li>
        <li>
          <div
            id="HumareBareme"
            >about us</div          >
          <div className="about-us-div" id="about-us-dropdown">
            <ul className="main-about-us">
              <li><div>Our team</div></li>
              <li><div>Editorial policy</div></li>
              <li><div>medical review board</div></li>
              <li><div>expert panel</div></li>
              <li><div>contact us</div></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </nav></div>
    </div>
  )

}