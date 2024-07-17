import React from 'react'
import './Footer.css'
 import youtube_icon from '../../assets/youtube_icon.png'
 import instagram_icon from '../../assets/instagram_icon.png'
 import facebook_icon from '../../assets/facebook_icon.png' 
 import twitter_icon from '../../assets/twitter_icon.png' 
function Footer() {
  return (
    <div className='footer py-5 px-7 max-w-5xl mx-auto'>
      <div className="footer-icons flex gap-5 my-10">
        <img src={youtube_icon} alt="" />
        <img src={facebook_icon} alt="" />   
        <img src={twitter_icon} alt="" />       
        <img src={instagram_icon} alt="" />  
        </div>    
       <ul className='grid grid-cols-auto-4 gap-4 mb-8 list-none'>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Job</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preference </li>
        <li> Corporate Information</li>
        <li>Contact Us</li>
        
        </ul> 
    <p className="copyright-text text-gray-700 text-sm">
      &copy; 1997-2024 Netflix, Inc.
    </p>
    </div>
  )
}

export default Footer