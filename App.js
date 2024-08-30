import { Route,Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Categories from "./pages/categories/Categories";
import Productdetail from "./pages/productdetail/Productdetail";
import Navbar from  "./components/navbar/Navbar"
import Fotter from  "./components/fotter/Fotter"
function App() {
  return (
    <div>
    <Navbar/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/category/:categoryId?" element={<Categories/>}/>
<Route path="/products/:productId" element={<Productdetail/>}/>
</Routes>
<Fotter/>
    </div>
    
    
  );
}

export default App;
