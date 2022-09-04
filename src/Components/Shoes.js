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

const Shoes = () => {


  const [likeno, setLikeno] = useState(0)
  return (
    <div
      className="h-screen w-screen ">
      <Navbar />
      <p className="texts">We Offer Qualty Shoes At Quality Prices</p>
      <small className="">Tap to Add to cart</small>
      <div className="w-screen h-sidebar img4"><div className="w-full h-smoke smoke"></div></div>
      <div
        className='arrange place-items-center p-10 gap-8 w-screen h-fit mb-28'>
        <div className="grid place-items-center text-center anime "><img src='./Images/Shoes/Image1.jpg' className="cursor-pointer hover:scale-105 anime" /></div>    
        <div className="grid place-items-center text-center anime "><img src='./Images/Shoes/Image2.jpg' className="cursor-pointer hover:scale-105 anime" /> </div>  
        <div className="grid place-items-center text-center anime "><img src='./Images/Shoes/Image3.jpg' className="cursor-pointer hover:scale-105 anime" /> </div>  
        <div className="grid place-items-center text-center anime "><img src='./Images/Shoes/Image4.jpg' className="cursor-pointer hover:scale-105 anime" /> </div>  
        <div className="grid place-items-center text-center anime "><img src='./Images/Shoes/Image5.jpg' className="cursor-pointer hover:scale-105 anime" /></div>
        <div className="grid place-items-center text-center anime "><img src='./Images/Shoes/Image7.jpg' className="cursor-pointer hover:scale-105 anime" /></div>
        <div className="grid place-items-center text-center anime "><img src='./Images/Shoes/Image8.jpg' className="cursor-pointer hover:scale-105 anime" /></div>
        <div className="grid place-items-center text-center anime "><img src='./Images/Shoes/Image9.jpg' className="cursor-pointer hover:scale-105 anime" /></div>
        <div className="grid place-items-center text-center anime "><img src='./Images/Shoes/Image10.jpg' className="cursor-pointer hover:scale-105 anime" /></div>
        <div className="grid place-items-center text-center anime "><img src='./Images/Shoes/Image11.jpg' className="cursor-pointer hover:scale-105 anime" /></div>
        <div className="grid place-items-center text-center anime "><img src='./Images/Shoes/Image12.jpg' className="cursor-pointer hover:scale-105 anime" /></div>
        <div className="grid place-items-center text-center anime "><img src='./Images/Shoes/Image13.jpg' className="cursor-pointer hover:scale-105 anime" /></div>
        <div className="grid place-items-center text-center anime "><img src='./Images/Shoes/Image6.jpg' className="cursor-pointer hover:scale-105 anime" /></div>
        <div className="grid place-items-center text-center anime "><img src='./Images/Shoes/Image14.jpg' className="cursor-pointer hover:scale-105 anime" /></div>
        <div className="grid place-items-center text-center anime "><img src='./Images/Shoes/Image15.jpg' className="cursor-pointer hover:scale-105 anime" /></div>
        <div className="grid place-items-center text-center anime "><img src='./Images/Shoes/Image16.jpg' className="cursor-pointer hover:scale-105 anime" /></div>
        <div className="grid place-items-center text-center anime "><img src='./Images/Shoes/Image17.jpg' className="cursor-pointer hover:scale-105 anime" /></div>
        <div className="grid place-items-center text-center anime "><img src='/Images/Shoes/Image18.jpg' className="cursor-pointer hover:scale-105 anime" /></div>
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

export default Shoes