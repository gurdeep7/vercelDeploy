import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom"
import { Home } from './components/Home';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { Contact } from './components/Contact';
import { Product } from './components/Product';
import { Products } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { Login } from './components/Login';
import { PrivateRoute } from './components/PrivateRoute';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      <Routes>
        <Route path={"/"} element={<div>Home page</div>} >
        
        </Route>
        
        <Route path={"/home"} element= {<Home />} />
        <Route path={"/about"} element= {<About />} />
        <Route path={"/contact"} element= {<Contact />} />
        <Route path={"/contact"} element= {<Contact />} />
        <Route path={"/product/:id"} element={<Product />}/>
        <Route path= {"/products"} element= {<PrivateRoute> <Products /> </PrivateRoute>}/>
        <Route path= {"/users/:userid"} element= {<PrivateRoute ><UserDetails /> </PrivateRoute>}/>
        <Route path={"*"} element={<h1>Page not found</h1>}/>
      </Routes>
      
    </div>
  );
}

export default App;
