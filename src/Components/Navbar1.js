import "./Navbar.css"
import { FaSearch, FaBars, FaUser } from 'react-icons/fa'
import {
  BiArrowBack
} from 'react-icons/bi'
import { useState } from "react"
import { auth, db } from '../firebase'
import Bars from "./Bars"
import { Link } from "react-router-dom"
import { updateDoc, doc } from "firebase/firestore"
import { signOut } from "firebase/auth"

const Navbar1 = () => {
      const [pressed, setPressed] = useState(false)

  const Run = () => {
       setPressed(!pressed)
  }

  const handleSignOut = async () => {
    await signOut(auth)
    
    await updateDoc(doc(db, 'users', auth.currentUser.uid), {
      isOnline: false
    })
  }
  return (
   <div className='w-screen h-14 navbar'>
      <div className="flex gap-3">
      <a className="flex items-center gap-2 flex-row-reverse ">
      <p className="cursor-pointer">Menu</p>
          <FaBars style={{ cursor: "pointer" }} onClick={()=>{ Run()}} />  
      </a> 

     </div>
     {pressed ?
        ( 
        <div className="grid text-center w-full h-full absolute bg-white m-auto top-0 left-0"> 
            <div className="flex p-10 justify-around items-center flex-row-reverse ">
             {auth.currentUser ? 
                (
                  <Link to="/">
                  <p onClick={handleSignOut}>Sign Out</p>
                  </Link>
                ) : (
                  <Link to="/signin">
                  <p className="cursor-pointer">Sign In</p>
                  </Link>
             )}
              <p className="p-3 m-4 ">Menu</p>
              <Link to="/" >
              <p className="cursor-pointer">Home</p>
              </Link>
              <BiArrowBack style={{fontSize:'25px', cursor: 'pointer'}} className='animate' onClick={()=>{ Run()}}/>  
            </div>
          <div>
      <Link to="/shoes"><Bars title="Shoes" /></Link>
      <Link to="/shoes"><Bars title="Shirts"  /></Link>
      <Link to="/jeans"><Bars title="Jeans"  /></Link>
      <Link to="/acc"><Bars title="Accessories"  /></Link>
      <Link to="/gowns"><Bars title="Gowns"  /></Link>
          </div>
        </div>
        
        ) : (
          null
        )} 
    </div>
  )
}

export default Navbar1