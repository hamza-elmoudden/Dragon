import './App.css';
import { Routes,Route } from "react-router-dom";
import Home from './Page/Home';
import { Product } from './Page/Product';
import { Contact } from './Page/Contact';
import { Products } from './Page/Products';


function App() {
  return (
      <>
        <Routes>   
          <Route path='/' element={<Home/>}/>
          <Route path="/product/:idprod" element={<Product/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/products' element={<Products/>}/>
        </Routes>
      </>
  );
}

export default App;
