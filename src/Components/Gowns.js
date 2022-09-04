import Navbar from "./Navbar"
import "./parts.css"
import {
  FaInstagram,
  FaTwitter, 
  FaGithub,
  FaWhatsapp,
  FaHeart,
} from 'react-icons/fa'
import {
  AiOutlineHeart 
} from 'react-icons/ai'
import { useState } from "react"

const Gowns = () => {
  return (
    <div
      className="h-screen w-screen ">
      <Navbar />
      <p className="texts">We Offer Qualty Jewelry At Quality Prices</p>
      <small className="">Tap to Add to cart</small>
      <div className="w-screen h-sidebar img"></div>
      <div
        className='arrange place-items-center p-10 gap-8 w-screen h-fit mb-28'>
        <div className="grid place-items-center text-center anime "><img src='./Images/Gowns/Image1.jpg' className="cursor-pointer hover:scale-105 anime" /></div>    
        <div className="grid place-items-center text-center anime "><img src='./Images/Gowns/Image2.jpg' className="cursor-pointer hover:scale-105 anime" /> </div>  
        <div className="grid place-items-center text-center anime "><img src='./Images/Gowns/Image3.jpg' className="cursor-pointer hover:scale-105 anime" /> </div>  
        <div className="grid place-items-center text-center anime "><img src='./Images/Gowns/Image4.jpg' className="cursor-pointer hover:scale-105 anime" /> </div>  
        <div className="grid place-items-center text-center anime "><img src='./Images/Gowns/Image5.jpg' className="cursor-pointer hover:scale-105 anime" /></div>
        <div className="grid place-items-center text-center anime "><img src='./Images/Gowns/Image7.jpg' className="cursor-pointer hover:scale-105 anime" /></div>
        <div className="grid place-items-center text-center anime "><img src='./Images/Gowns/Image8.jpg' className="cursor-pointer hover:scale-105 anime" /></div>
        <div className="grid place-items-center text-center anime "><img src='./Images/Gowns/Image9.jpg' className="cursor-pointer hover:scale-105 anime" /></div>
        <div className="grid place-items-center text-center anime "><img src='./Images/Gowns/Image10.jpg' className="cursor-pointer hover:scale-105 anime" /></div>
        <div className="grid place-items-center text-center anime "><img src='./Images/Gowns/Image11.jpg' className="cursor-pointer hover:scale-105 anime" /></div>
        <div className="grid place-items-center text-center anime "><img src='./Images/Gowns/Image12.jpg' className="cursor-pointer hover:scale-105 anime" /></div>
        <div className="grid place-items-center text-center anime "><img src='./Images/Gowns/Image13.jpg' className="cursor-pointer hover:scale-105 anime" /></div>
        <div className="grid place-items-center text-center anime "><img src='./Images/Gowns/Image6.jpg' className="cursor-pointer hover:scale-105 anime" /></div>
        <div className="grid place-items-center text-center anime "><img src='./Images/Gowns/Image14.jpg' className="cursor-pointer hover:scale-105 anime" /></div>
        <div className="grid place-items-center text-center anime "><img src='./Images/Gowns/Image15.jpg' className="cursor-pointer hover:scale-105 anime" /></div>
        <div className="grid place-items-center text-center anime "><img src='./Images/Gowns/Image16.jpg' className="cursor-pointer hover:scale-105 anime" /></div>
        <div className="grid place-items-center text-center anime "><img src='./Images/Gowns/Image17.jpg' className="cursor-pointer hover:scale-105 anime" /></div>
        <div className="grid place-items-center text-center anime "><img src='./Images/Gowns/Image18.jpg' className="cursor-pointer hover:scale-105 anime" /></div>
        <div className="grid place-items-center text-center anime "><img src='./Images/Gowns/Image19.jpg' className="cursor-pointer hover:scale-105 anime" /></div>        
        <div className="grid place-items-center text-center anime "><img src='./Images/Gowns/Image20.jpg' className="cursor-pointer hover:scale-105 anime" /></div> 
        <div className="grid place-items-center text-center anime "><img src='./Images/Gowns/Image21.jpg' className="cursor-pointer hover:scale-105 anime" /></div>
        <div className="grid place-items-center text-center anime "><img src='./Images/Gowns/Image22.jpg' className="cursor-pointer hover:scale-105 anime" /></div>
        <div className="grid place-items-center text-center anime "><img src='./Images/Gowns/Image23.jpg' className="cursor-pointer hover:scale-105 anime" /></div>
        <div className="grid place-items-center text-center anime "><img src='./Images/Gowns/Image24.jpg' className="cursor-pointer hover:scale-105 anime" /></div>
      </div>
      <div
        className=' foot bottom-0'>
        <h1>Contact Me</h1>
        <p> Usenbetse@gmail.com</p>
        <p>08081955876, 07047011172</p>
        <h1
          className="flex justify-around pr-12 pl-12">
          <FaInstagram />
          <FaTwitter />
          <FaWhatsapp />
          <FaGithub />
        </h1>
      </div>
    </div>
  )
}

export default Gowns