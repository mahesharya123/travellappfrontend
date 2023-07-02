import {Route , Routes}  from "react-router-dom";
import {Home,SingleHotel} from "./Pages";
import "./components/Navbar/Nav.css"

import  "./App.css";

function App() {
  return (
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/hotels/:name/:address/:id/reserve" element={<SingleHotel/>}></Route>
   </Routes>

  );
}

export default App;
