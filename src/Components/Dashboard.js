import Navbar from "./Navbar"
import "./Design.css"
import Bars from "./Bars"
import { Link } from "react-router-dom"

const Dashboard = () => {
  return (
      <div className="h-screen w-screen block">
      <Navbar />   
      <h1 className="logo">
      <h2>
      Divine  
      </h2>
      <h2>
      Clothing  
      </h2>
      <h2>
      line  
      </h2>
      </h1>
      <Link to="/shoes"><Bars title="Shoes" /></Link>
      <Link to="/shirts"><Bars title="Shirts"  /></Link>
      <Link to="/jeans"><Bars title="Jeans"  /></Link>
      <Link to="/acc"><Bars title="Accessories"  /></Link>
      <Link to="/gowns"><Bars title="Gowns"  /></Link>
    </div>
  )
}

export default Dashboard