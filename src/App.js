
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import AddNewProduct from './Components/Pages/Dashboard/AddNewProduct';
// import Blogs from './Components/Pages/Blogs/Blogs';
import AddReview from './Components/Pages/Dashboard/AddReviews';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import MakeAdmin from './Components/Pages/Dashboard/MakeAdmin';
import ManageAllOrders from './Components/Pages/Dashboard/ManageAllOrders';
import MyOrders from './Components/Pages/Dashboard/MyOrder';
import MyProfile from './Components/Pages/Dashboard/MyProfile';
import Footer from './Components/Pages/Footer/Footer';
import Header from './Components/Pages/Header/Header';
import Home from './Components/Pages/Home/Home';
import Order from './Components/Pages/Home/Order/Order';
import NotFound from './Components/Pages/NotFound/NotFound';
import Login from './Components/Pages/Share/Login/Login';
import Registration from './Components/Pages/Share/Registration/Registration';
import RequireAuth from './Components/Pages/Share/RequireAuth/RequireAuth';
// import SignUp from './Components/Pages/Share/SignUp/SignUp';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/registration' element={<Registration></Registration>}></Route>
      <Route path='/products/:orderId' element={<Order></Order>}></Route>
      <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
            <Route index element={<MyProfile></MyProfile>}></Route>
            <Route path='myOrders' element={<MyOrders></MyOrders>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
          <Route path='addProduct' element={<AddNewProduct></AddNewProduct>}></Route>
          <Route path='manageOrders' element={<ManageAllOrders></ManageAllOrders>}></Route>
          <Route path='makeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>
            {/* <Route path='payment/:id' element={<Payment></Payment>}></Route> */}
            {/* <Route path='manageProducts' element={
              <RequireAdmin>
                <ManageProduct></ManageProduct>
              </RequireAdmin>
            }></Route>
            <Route path='manageOrders' element={
              <RequireAdmin>
                <ManageAllOrders></ManageAllOrders>
              </RequireAdmin>
              }>
            </Route>
            <Route path='addProduct' element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }></Route>
            <Route path='makeAdmin' element={
              <RequireAdmin>
                <MakeAdmin></MakeAdmin>
              </RequireAdmin>}>
            </Route> */}
        </Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    <ToastContainer></ToastContainer> 
    <Footer></Footer>
    </div>
  );
}

export default App;
