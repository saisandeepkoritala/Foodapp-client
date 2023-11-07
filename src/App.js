import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Login from "./Auth/login";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Productpage from "./components/Productpage";
import Cart from "./components/Cart";
import { useRef } from "react";
import Details from "./components/Details";
import NavigationContext from './context/Navigation';
import { useContext } from 'react';
import Signup from "./Auth/signup";

function App() {
  const Ref = useRef();

  const { user,signuser,cart } = useContext(NavigationContext);

  const handleClick = () => {
    Ref.current.classList.toggle("small");
  }

  return (
    <BrowserRouter>
      <div className="navbar grey" ref={Ref}>
        <Link to="/home" onClick={handleClick}>Home</Link>
        <Link to="/categories" onClick={handleClick}>Categories</Link>
        <Link to="/productpage" onClick={handleClick}>Product page</Link>
        <Link to="/cart" onClick={handleClick}>
          <div className="out">
            Cart
            <div className="in">
              {cart.length || ""}
            </div>
          </div>
          </Link>
        <Link className="bars"><FaBars onClick={handleClick} /></Link>
      </div>
      <div className="routes">
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to="/home" replace /> : <Login />}
          />
          <Route
            path="/signup"
            element={signuser ? <Signup/> : <Navigate to="/home" replace /> }
          />
          <Route
            path="/home"
            element={user ? <Home /> : <Navigate to="/" replace />}
          />
          <Route
            path="/categories"
            element={user ? <Categories /> : <Navigate to="/" replace/>}
          />
          <Route
            path="/productpage"
            element={user ? <Productpage /> : <Navigate to="/" replace />}
          />
          <Route
            path="/cart"
            element={user ? <Cart /> : <Navigate to="/" replace />}
          />
          <Route
            path="/details/:id"
            element={user ? <Details /> : <Navigate to="/" replace />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
