import './App.css';
import NavBar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Products from "./components/Products";
import Home from "./components/Home";
import Customer from './components/Customer';
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";
import Register from './components/Register';
import Login from "./components/Login";
import Logout from './components/Logout';
import Medicine from "./components/Medicine";
import AddCustomer from "./components/AddCustomer";
import AddUser from "./components/AddUser";
import AddOrder from "./components/AddOrder";
import AddMedicine from "./components/AddMedicine";
import UpdateCustomer from "./components/UpdateCustomer";
import UpdateUser from './components/UpdateUser';
import UpdateMedicine from './components/UpdateMedicine';
import User from './components/User';
import Order from './components/Order';
import AdminLogin from './components/AdminLogin';
import NavAdmin from './components/NavAdmin';
import AdminHome from './components/AdminHome';
import UserHome from './components/UserHome';
import UpdateOrder from './components/UpdateOrder';
import MedicineShop from './components/MedicineShop';
import { Carousel,CarouselItem } from 'react-bootstrap';
import { CartProvider } from 'react-use-cart';

function App() {
  return (
    <div className="App">
      <NavBar/>      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/userhome' element={<UserHome/>}/>
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/customer" element={<Customer/>}/>
        <Route path="/medicine" element={<Medicine/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/navadmin' element={<NavAdmin/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path="/cart" element={<Cart />} />        
        <Route path="logout" element={<Logout />} />
        <Route path='*' element={<NotFound/>}/>
        <Route path='/customer/add' element={<AddCustomer/>} />
        <Route path='/medicine/add' element={<AddMedicine/>}/>        
        <Route path='/user/add' element={<AddUser/>}/>   
        <Route path='/order/add' element={<AddOrder/>}/>
        <Route path='/customer/update/:customerId' element={<UpdateCustomer/>}/>
        <Route path='/medicine/update/:medicineId' element={<UpdateMedicine/>}/>
        <Route path='/orders/update/:orderId' element={<UpdateOrder/>}/>
        <Route path='/users/update/:userId' element={<UpdateUser/>}/>
        <Route path='/navadmin' element={<NavAdmin/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/medicineshop' element={<MedicineShop/>}/>
      </Routes>
      
      
      
    </div>
  );
}

export default App;