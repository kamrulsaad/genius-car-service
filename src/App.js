import Header from '../src/Pages/Shared/Header/Header'
import Footer from '../src/Pages/Shared/Footer/Footer'
import Home from './Pages/Home/Home/Home'
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import Checkout from './Pages/CheckOut/Checkout';
import AddServices from './Pages/AddServices/AddServices';
import ManageServices from './Pages/ManageServices/ManageServices';

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/services/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/checkout' element= {
         <RequireAuth>
           <Checkout></Checkout>
         </RequireAuth>
       }></Route>
       <Route path='/manageServices' element= {
         <RequireAuth>
           <ManageServices></ManageServices>
         </RequireAuth>
       }></Route>
       <Route path='/addServices' element= {
         <RequireAuth>
           <AddServices></AddServices>
         </RequireAuth>
       }></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
