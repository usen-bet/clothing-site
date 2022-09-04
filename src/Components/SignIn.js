import Navbar1 from "./Navbar1"
import "./Account.css"
import { Link } from 'react-router-dom'
import { useState, useEffect,useRef } from "react"
import { createUserWithEmailAndPassword } from 'firebase/auth' 
import { auth, db } from "../firebase"
import { setDoc, doc, Timestamp } from 'firebase/firestore'
import { useNavigate } from "react-router-dom"
import {
    FaInfoCircle,
    FaCheck,
    FaTimes
} from 'react-icons/fa'


const SignIn = () => {

  const navigate = useNavigate()
    
       const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        error: null,
        loading: false,
       });
    
    const { username, email, password, confirmPassword, error, loading } = data

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setData({...data, error: null, loading: true})
        if (!username || !email || !password || !confirmPassword) {
           setData({...data, error: 'Please Input all fields' }) 
        }
        try {
            const result = await createUserWithEmailAndPassword(
                auth,
                email,
                password,
            ); 
            await setDoc(doc(db, 'rooms', result.user.uid), {
                uid: result.user.uid,
                email,
                password,
                isOnline: true
            });
            navigate("/home")
            setData({
                name: "",
                email: '',
                password: '',
                error: error.message,
                loading: false
            })
        } catch (err) {
            setData({...data, error: error.message, loading: false})
        }
    }
  return (
      <div>
          <Navbar1 />
          <h1 className="title">Signin</h1>
          <div className="w-body h-fit pb-6 pt-2 bg-black m-auto mt-16 rounded-lg ">
              <h1 className="p-3 text-white mt-5 text-2xl sgn">Create your Account</h1>
              <form className="grid place-items-center " onSubmit={handleSubmit}>
                    <input
                        type='text'
                        className="input-field"
                        placeholder="Type Username"
                        onChange={handleChange}
                        name="username"
                        value={username}
                        id='username'
                  />
            
                    <input
                        type='email'
                        className="input-field"
                        placeholder="Type Email"
                        onChange={handleChange}
                        name='email'
                        value={email}
                        
                  />
                   <input
                        type='password'
                        className="input-field"
                        placeholder="Type Password"
                        onChange={handleChange}
                        name='password'
                        value={password}
                  />
                   <input
                        type='password'
                        className="input-field"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        name="confirmPassword"
                        value={confirmPassword}
                    />                  
                 <Link to="/home"> <button
                      className='btn hover:bg-red-400'
                      disabled={loading}
                  onClick={handleSubmit}>{loading ? 'Signing In' : 'Sign in'}</button></Link>
                  {error ? <p className='error'>{error}</p>:null}
                  <p className="text-white mt-5 text-2xl sgn">Already have an account? </p>
                  <Link to="/login" className="text-white text-2xl mt-5 sgn">Log In</Link>
              </form>
              
          </div>    
    </div>
  )
}

export default SignIn