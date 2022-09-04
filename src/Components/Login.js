import Navbar1 from "./Navbar1"
import "./Account.css"
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from "react"
import { signInWithEmailAndPassword } from 'firebase/auth' 
import { auth, db } from "../firebase"
import { doc, updateDoc } from 'firebase/firestore'
import { Navigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../Context/auth"

 
const Login = () => {

       const {user} = useContext(AuthContext)
    
       const [data, setData] = useState({
        email: "",
        password: "",
        error: null,
        loading: false,
       });
    const [moves, setMoves] = useState(false)
        if (moves) {
        return <Navigate to="/home" />
    }

    
    const { email, password, error, loading } = data

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    };

        const handleSubmit = async (e) => {
     
    e.preventDefault();
    setData({ ...data, error: null, loading: true });
    if (!email || !password) {
      setData({ ...data, error: "All fields are required" });
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      await updateDoc(doc(db, "users", result.user.uid), {
        isOnline: true,
      });
      setData({
        email: "",
        password: "",
        error: null,
        loading: false,
      }); 
        setMoves(true)
      
    } catch (err) {
      setData({ ...data, error: err.message, loading: false });
    }
  };
  
  return (
      
      <div className="overflow-x-hidden">
          <Navbar1 />
          <h1 className="title h-fit p-1">Login</h1>
          <div className="w-body h-fit p-5 bg-black m-auto mt-16 rounded-lg ">
              <h1 className="p-3 text-white mt-5 text-2xl sgn">Login to your Account</h1>
              <form className="grid place-items-center ">
                    <input
                        type='text'
                        className="input-field"
                        placeholder="Type Email"
                        onChange={handleChange}
                        name="email"
                        value={email}
                    />
                    <input
                        type='password'
                        className="input-field"
                        placeholder="Type Password"
                        onChange={handleChange}
                        name="password"
                        value={password}
                    />
                    <button
                        onClick={handleSubmit}
                        className='btn hover:bg-red-400'
                        disabled={loading}>{loading ? 'Logging In' : 'Log in'}</button>
                    {error ? <p className='error'>{error}</p> : null}
                    
                    <p
                        className="text-white mt-5 text-2xl sgn">Dont have an account? </p>
                  <Link to="/signin" className="text-white text-2xl mt-5 sgn">Sign In</Link>
              </form>
         </div>    
    </div>
  )
}

export default Login