import './App.css';
import Header from '../src/Pages/Shared/Header/Header'
import Footer from '../src/Pages/Shared/Footer/Footer'
import Home from './Pages/Home/Home/Home'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
