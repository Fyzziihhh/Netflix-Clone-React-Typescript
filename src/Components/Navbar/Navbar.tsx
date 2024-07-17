import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_icon from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'

function Navbar() {
 const navRef=useRef<HTMLDivElement>(null);

 useEffect(()=>{
window.addEventListener('scroll',()=>{
   if(window.scrollY>=80){
    navRef.current?.classList.add('nav-dark')
   }else{
    navRef.current?.classList.remove('nav-dark')
   }
})
 },[])

  return (
    <div ref={navRef} className="navbar w-full py-5 px-6p flex justify-between fixed  z-50"  >
      <div className="navbar-left flex items-center gap-12">
        <img className="w-24" src={logo} alt="Logo" />
        <ul className="flex list-none gap-5 nav-list text-lg ">
            <li>Home</li>
            <li>Tv Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browser By Language</li>
        </ul>
      </div>
      <div className="navbar-right flex gap-5 items-center">
        <img className="icons" src={search_icon} alt="search_icon" />
        <p>Children</p>
        <img className="icons" src={bell_icon} alt="bell_icon" />
        <div className="navbar-profile group relative flex items-center gap-3">
        <img className="profile rounded w-9 " src={profile_icon} alt="Profile" />
        <img className="caret_icon" src={caret_icon} alt="" />
         <div className="drop-down absolute top-full right-0 w-max bg-customColor py-4 px-6 rounded z-10 underline hidden group-hover:block ">
            <p className="text-sm cursor-pointer">SignOut of Netflix</p>
         </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
