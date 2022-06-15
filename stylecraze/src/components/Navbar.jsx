import React from 'react'
import './navbar.css'
// import './Hitler.scss'
 import {useRef, useEffect} from 'react';

export const Navbar = () => {

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
//   // const ref = useRef(null);

  // toggleMakeUp(ref.current)
  // useEffect(()=>{
  //   // const kantaLage=ref.current
   
  //     toggleMakeUp(ref.current)
    
  // })
var navfirstlink = document.getElementById("nav-first-link");

if(navfirstlink){
navfirstlink.addEventListener("mouseover", () => {
  toggleMakeUp(makeup);
});
navfirstlink.addEventListener("mouseout", () => {
  toggleMakeUpOff(makeup);
});
}


var haircare = document.getElementById("haircare-dropdown")

 var secondNavLink = document.getElementById("second-nav-link");

 if(secondNavLink){

secondNavLink.addEventListener("mouseover", () => {
  toggleMakeUp(haircare);
});
secondNavLink.addEventListener("mouseout", () => {
  toggleMakeUpOff(haircare);
});
 }


var skincare = document.getElementById("skincare-dropdown");

var thirdNavLink = document.getElementById("third-nav-link");


if(thirdNavLink){
thirdNavLink.addEventListener("mouseover", () => {
  toggleMakeUp(skincare);
});
thirdNavLink.addEventListener("mouseout", () => {
  toggleMakeUpOff(skincare);
});
}


var hairstyle = document.getElementById("hairstyle-dropdown");
var fourthNavLink = document.getElementById("fourth-nav-link");


if(fourthNavLink){
fourthNavLink.addEventListener("mouseover", () => {
  toggleMakeUp(hairstyle);
});
fourthNavLink.addEventListener("mouseout", () => {
  toggleMakeUpOff(hairstyle);
});
}

var aboutus = document.getElementById("about-us-dropdown");
var lastNavLink = document.getElementById("last-nav-link");

if(lastNavLink){
lastNavLink.addEventListener("mouseover", () => {
  toggleMakeUp(aboutus);
});
lastNavLink.addEventListener("mouseout", () => {
  toggleMakeUpOff(aboutus);
});
}

  return (
    <div>
        <div><img src='https://cdn2.stylecraze.com/wp-content/themes/buddyboss-child/images/sc-logo.png'/></div>
        <div><nav>
    <div className="dr-container">
      <ul>
        <li>
          <div id = "nav-first-link">Make up</div          >
          <div className="dr-flex dr-dropdown-div"   id="makeup-dropdown">
            <ul className="dr-flex">
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
            <ul className="dr-flex" id="make-up-submenu">
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2014/01/46-Top-5-VLCC-Bridal-Makeup-Packages-ss-267x300.jpg.webp"
                    alt=""
                  /><span>Top 5 VLCC Bridal Makeup Packages</span></div>
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/How-To-Apply-Bridal-Eye-Makeup-Perfectly-1-267x300.jpg"
                    alt=""
                  /><span
                    >How To Apply Bridal Eye Makeup Perfectly?</span                  ></div>
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2012/10/Look-Perfect-For-Your-Special-Day-Bridal-Makeup-Tips-For-Dry-Skin-267x300.jpg"
                    alt=""
                  /><span
                    >Look Perfect For Your Special Day – Bridal Makeup Tips
                    For Dry Skin!</span                  ></div                >
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2015/08/1513_Top-10-Bridal-Makeup-Packages-In-India-267x300.jpg"
                    alt=""
                  /><span>Top 10 Bridal Makeup Packages In India</span></div                >
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2013/09/750-Top-10-Lakme-Bridal-Salon-Packages-267x300.jpg"
                    alt=""
                  /><span>Top 10 Lakme Bridal Salon Packages</span></div                >
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2013/09/1300-Best-Bridal-Makeup-Kits-Available-In-India-Our-Top-10-ss-267x300.jpg"
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
            id = "second-nav-link"
            >hair care</div>
          <div className="dr-flex dr-dropdown-div" id="haircare-dropdown">
            <ul className="dr-flex">
              <li><div>Basic Hair Care</div></li>
              <li><div>Dandruff</div></li>
              <li><div>Dry Hair Care</div></li>
              <li><div>Hair Care Ideas</div></li>
              <li><div>Hair Care Solutions</div></li>
              <li><div>Hair Colour</div></li>
              <li><div>Hair Fall</div></li>
              <li><div>Hair Growth</div></li>
            </ul>
            <ul className="dr-flex">
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2013/01/Top-5-Hair-Products-For-Indian-Hair-1-267x300.jpg"
                    alt=""
                  /><span
                    >5 Best Hair Products For Indian Hair To Try In
                    2021</span
                  ></div                >
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2013/03/Hair-Straightening-Vs--Hair-Smoothing-Differences-Side-Effects-And-Maintenance-Tips--267x300.jpg"
                    alt=""
                  /><span
                    >Hair Straightening Vs. Hair Smoothing: Differences,
                    Side Effects, And..</span                  ></div                >
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2015/02/Best-Shower-Tips-To-Keep-Your-Hair-Healthy-267x300.jpg"
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
            id="third-nav-link"
            >skin care</div   >
          <div className="dr-flex dr-dropdown-div" id="skincare-dropdown">
            <ul className="dr-flex">
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
            <ul className="dr-flex">
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
            id="fourth-nav-link"
            >hair styles</div          >
          <div className="dr-flex dr-dropdown-div" id="hairstyle-dropdown">
            <ul className="dr-flex">
              <li><div>Bridal Makeup</div></li>
              <li><div>Celebrity Makeup</div></li>
              <li><div>Eye Make up</div></li>
              <li><div>Face Makeup</div></li>
              <li><div>Lip Make up</div></li>
              <li><div>Makeup Ideas</div></li>
              <li><div>Mehandi Designs</div></li>
              <li><div>Nail Art</div></li>
            </ul>
            <ul className="dr-flex">
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
        <li>
          <div
          id="fifth-nav-link"
            
            >health and wellness</div          >
          <div className="dr-flex dr-dropdown-div" id="health-dropdown">
            <ul className="dr-flex">
              <li><div>Bridal Makeup</div></li>
              <li><div>Celebrity Makeup</div></li>
              <li><div>Eye Make up</div></li>
              <li><div>Face Makeup</div></li>
              <li><div>Lip Make up</div></li>
              <li><div>Makeup Ideas</div></li>
              <li><div>Mehandi Designs</div></li>
              <li><div>Nail Art</div></li>
            </ul>
            <ul className="dr-flex">
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2020/08/11-Best-Exercise-Bikes-For-Seniors1-267x300.jpg.webp"
                    alt=""
                  /><span>Top 5 VLCC Bridal Makeup Packages</span></div                >
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2021/08/11-Best-Tennis-Shoes-For-Women-With-Wide-Feet--2021-267x300.jpg.webp"
                    alt=""
                  /><span
                    >How To Apply Bridal Eye Makeup Perfectly?</span             ></div             >
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2021/12/Yoga-And-Exercises-To-Relieve-Constipation-1-1-267x300.jpg.webp"
                    alt=""
                  /><span
                    >Look Perfect For Your Special Day – Bridal Makeup Tips
                    For Dry Skin!</span                ></div              >
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2020/09/10-Best-Comfortable-Shoes-For-Jumping-Rope-267x300.jpg.webp"
                    alt=""
                  /><span>Top 10 Bridal Makeup Packages In India</span></div                >
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2014/03/9-Best-Ayurvedic-Products-For-Increasing-Height-267x300.jpg.webp"
                    alt=""
                  /><span>Top 10 Lakme Bridal Salon Packages</span></div                >
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2020/06/11-Best-Fitness-Trackers-For-Kids-267x300.jpg.webp"
                    alt=""
                  /><span
                    >Best Bridal Makeup Kits Available In India - Our Top
                    10</span                  ></div                >
              </li>
            </ul>
            <div className="findmore">Find More</div>
          </div>
        </li>
        <li>
          <div
          id="sixth-nav-link"
           
            >news</div          >
          <div className="dr-flex dr-dropdown-div" id="news-dropdown">
            <ul className="dr-flex">
              <li><div>Bridal Makeup</div></li>
              <li><div>Celebrity Makeup</div></li>
              <li><div>Eye Make up</div></li>
              <li><div>Face Makeup</div></li>
              <li><div>Lip Make up</div></li>
              <li><div>Makeup Ideas</div></li>
              <li><div>Mehandi Designs</div></li>
              <li><div>Nail Art</div></li>
            </ul>
            <ul className="dr-flex">
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2021/12/hayu-banner-267x300.jpg.webp"
                    alt=""
                  /><span>Top 5 VLCC Bridal Makeup Packages</span></div                >
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2021/12/Himalaya-banner-267x300.jpg.webp"
                    alt=""
                  /><span
                    >How To Apply Bridal Eye Makeup Perfectly?</span                  ></div                >
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2021/12/5-Travel-Essentials-Every-Woman-Must-Carry-267x300.jpg.webp"
                    alt=""
                  /><span
                    >Look Perfect For Your Special Day – Bridal Makeup Tips
                    For Dry Skin!</span                  ></div                >
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2021/12/Himalaya_article_banner_final-1-1-2-267x300.jpg.webp"
                    alt=""
                  /><span>Top 10 Bridal Makeup Packages In India</span></div                >
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2020/02/Use-Himalaya-Fresh-Start-Oil-Clear-Face-Wash-Every-Morning-To-Get-Rid-Of-Your-Oily-Skin-1-267x300.jpg.webp"
                    alt=""
                  /><span>Top 10 Lakme Bridal Salon Packages</span></div                >
              </li>
              <li>
                <div
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2021/12/Himalaya_article_banner_final-1-1-1-267x300.jpg.webp"
                    alt=""
                  /><span
                    >Best Bridal Makeup Kits Available In India - Our Top
                    10</span                  ></div                >
              </li>
            </ul>
            <div className="findmore">Find More</div>
          </div>
        </li>
        <li>
          <div>tools</div>
        </li>
        <li><div>products</div></li>
        <li>
          <div
            id="last-nav-link"
            >about us</div          >
          <div className="about-us-div" id="about-us-dropdown">
            <ul className="dr-about-us">
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