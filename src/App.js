import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import {FaBars} from "react-icons/fa";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Productpage from "./components/Productpage";
import { useRef } from "react";
import Details from "./components/Details";
function App() {
  const Ref=useRef();
  const handleClick=()=>{
    Ref.current.classList.toggle("small");
  }
  return (
  <BrowserRouter> 
      <div className="navbar grey" ref={Ref}>
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/productpage">Product page</Link>
        <Link className="bars"><FaBars onClick={handleClick}/></Link>
      </div>
      <div className="routes">
        <Routes>
          <Route element={<Home />} path="/"/>
          <Route element={<Categories />} path="/categories"/>
          <Route element={<Productpage />} path="/productpage"/>
          <Route element={<Details/>} path="/details/:id" />
        </Routes>
      </div>
  </BrowserRouter>
)}

export default App;
