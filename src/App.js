
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import './App.css';
// import Blogs from './Components/Pages/Blogs/Blogs';
// // import AddReview from './Components/Pages/Dashboard/AddReviews';
// // import Dashboard from './Components/Pages/Dashboard/Dashboard';
// // import MyOrders from './Components/Pages/Dashboard/MyOrder';
// // import MyProfile from './Components/Pages/Dashboard/MyProfile';
import Footer from './Components/Pages/Footer/Footer';
import Header from './Components/Pages/Header/Header';
import Home from './Components/Pages/Home/Home';
// // import Order from './Components/Pages/Home/Order/Order';
import NotFound from './Components/Pages/NotFound/NotFound';
// import Login from './Components/Pages/Share/Login/Login';
// import RequireAuth from './Components/Pages/Share/RequireAuth/RequireAuth';
// import SignUp from './Components/Pages/Share/SignUp/SignUp';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      {/*
        {/* <Route path='/order/:orderId' element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>
        }></Route> */}
        {/* <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        */}
      <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    <ToastContainer></ToastContainer> 
    <Footer></Footer>
    </div>
  );
}

export default App;
