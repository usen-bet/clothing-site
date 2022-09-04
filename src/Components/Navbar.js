import "./Navbar.css"
import {
  FaSearch,
  FaBars,
  FaUser,
  FaSignature
} from 'react-icons/fa'
import {
  BsCart,
  BsSignpost
} from 'react-icons/bs'
import {
  BiArrowBack
} from 'react-icons/bi'
import { useState } from "react"
import Bars from "./Bars"
import { 
  Link
} from 'react-router-dom'
import {
  auth,
  db
} from '../firebase'
// import Data from "../Data.json"
import { signOut } from "firebase/auth"
import {
  updateDoc,
  doc
} from "firebase/firestore"
import { useContext } from "react"
import { AuthContext } from "../Context/auth"


const Navbar = () => {
  const {user} = useContext(AuthContext)
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
      

      {user ?
        (<>
        <Link to="/login">
            <div  className="flex gap-2 items-center ">
             <p
              className="hidden md:inline-block cursor-pointer"
                onClick={handleSignOut}>Log Out
              </p>
              <BsSignpost />
            </div>
        </Link>
        </>) : (
          <div className="flex gap-12">
      <Link to="/login" className="flex gap-2 items-center ">
              <p className="hidden md:inline-block cursor-pointer">Log In
              </p>
      <FaUser /> 
          </Link>  
          
      <Link to="/signin" className="flex gap-2 items-center ">
              <p className="hidden md:inline-block cursor-pointer">Register
              </p>
      <FaSignature />
      </Link> 
        </div>          
          ) 
          } 
          
      {/* <a class="flex gap-2 items-center ">
     <p className="hidden md:inline-block">Cart</p>
      <BsCart style={{fontSize:'21px'}} />
      </a>  */}
      {pressed ?
        (
          
          <div className="grid text-center w-full h-full absolute bg-white m-auto top-0 left-0"> 
            <div className="flex p-10 justify-around items-center flex-row-reverse ">
        {auth.currentUser ?
        (<>
        <Link to="/login" className="flex gap-2 items-center ">
            <p
              className="hidden md:inline-block cursor-pointer"
              onClick={handleSignOut}>Log Out </p>
      <BsSignpost /> 
          </Link>
        </>) : (
      <Link to="/login" className="flex gap-2 items-center ">
      <p className="hidden md:inline-block cursor-pointer">Log In </p>
      <FaUser /> 
          </Link>    
          ) 
          } 
              <Link to="/">
              <p className="cursor-pointer">Home</p>
              </Link>

              <BiArrowBack style={{fontSize:'25px', cursor: 'pointer'}} className='animate' onClick={()=>{ Run()}}/>  
          </div>
          <div>
      <Link to="/shoes"><Bars title="Shoes" /></Link>
      <Link to="/shirts"><Bars title="Shirts"  /></Link>
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

export default Navbar