import Gowns from "./Components/Gowns";
import Jeans from "./Components/Jeans";
import Accessories from "./Components/Accessories";
import Shoes from "./Components/Shoes";
import Shirts from "./Components/Shirts";
import Home from "./Components/Home"
import Dashboard from "./Components/Dashboard"
import Login from "./Components/Login";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Helmet } from 'react-helmet'

import './App.css';
import SignIn from "./Components/SignIn";
import AuthProvider from "./Context/auth";
import PrivateRoute from "./Components/PrivateRoute";


function App() {
  return (
    <div className="App">
    <Helmet>
                <meta charSet="utf-8" />
                <title>Clothing Brand Website</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    <AuthProvider>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/jeans" element={<Jeans />} />
          <Route path="/acc" element={<Accessories />} />
          <Route path="/gowns" element={<Gowns />} />
          <Route path="/shirts" element={<Shirts />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route element={<PrivateRoute />} >
          <Route element={<Home />} path="/home" exact /> 
          </Route>
    </Routes>
    </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;