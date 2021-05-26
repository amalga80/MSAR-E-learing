import React from 'react'
import logo from '../MSAR2-2.png'
import "../containers/css/footer.css";
import { TiSocialInstagram,TiSocialFacebook,TiSocialTwitter,TiSocialYoutube,TiSocialLinkedin } from "react-icons/ti";

export function FooterContainer() {
    return (
        <footer className="py-5 bgimg">
            <div className="container">
           
                <p className="py-2 ml-3" style={{color:'rgb(235, 220, 220)'}} >Questions? Contact Us.</p>
              
                <div className="row  m-auto bgr">
                    <ul className="col-md-3 col-6">
                        <li href="#">FAQ</li>
                        <li href="#">Ways to Watch</li>
                        <li href="#">Coporate Information</li>
                        <li href="#">MSAR Originals</li>
                    </ul>

                    <ul className="col-md-3 col-6">
                        <li href="#">Help Center</li>
                        <li href="#">Jobs</li>
                        <li href="#">Terms of Use</li>
                        <li href="#">Contact Us</li>
                    </ul>
                    <ul className="col-md-3 col-6">
                        <li href="#">Account</li>
                        <li href="#">Redeem Gift Cards</li>
                        <li href="#">Privacy</li>
                        <li href="#">Speed Test</li>
                    </ul>

                    <ul className="col-md-3 col-6">
                        <li href="#">Media Center</li>
                        <li href="#">Buy Gift Cards</li>
                        <li href="#">Cookies Prefernces</li>
                        <li href="#">Legal Notices</li>
                    </ul>
                </div>
              <div className="py-3 overflow-auto clearfix">
              <div className="col-md-6 col-12 float-left">
                <img className=" w-25" src={logo}  alt="Msar"/>
                </div>
             <div className="col-md-5 col-12 float-right text-right fa-2x  mb-3" style={{color:'rgb(235, 220, 220)'}}>
             <TiSocialTwitter /> <TiSocialFacebook /> <TiSocialInstagram className="mx-1" /> <TiSocialYoutube className="mx-1"/><TiSocialLinkedin/>
             </div>
              </div>  

              <p className="text-center " style={{color:'rgb(235, 220, 220)'}}>© 2021 MSAR. All rights reserved.</p>           
            </div>
        </footer>

    )
}