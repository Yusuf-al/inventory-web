import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Component/Footer/Footer";
import Nav from "./Component/Nav/Nav";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import Registration from "./Component/Registration/Registration";
import AllProducts from "./Component/Allproducts/AllProducts";
import Product from "./Component/Product/Product";
import AddProduct from "./Component/AddProduct/AddProduct";
import Inventory from "./Component/Inventory/Inventory";
import Myitem from "./Component/Myitem/Myitem";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import EditItems from "./Component/Edit/EditItems";
import ProtectRoute from "./Component/ProtectRoute/ProtectRoute";
import NotFound from "./Component/404/NotFound";
import About from "./Component/About/About";
import Blog from "./Component/Blog/Blog";

function App() {
  return (
    <div>
      <Nav></Nav>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>
        <Route
          path="/all-products"
          element={<AllProducts></AllProducts>}
        ></Route>
        <Route path="/product/:productId" element={<Product></Product>}></Route>
        <Route
          path="/product/edit/:productId"
          element={
            <ProtectRoute>
              <EditItems></EditItems>
            </ProtectRoute>
          }
        ></Route>
        <Route
          path="/add-product"
          element={
            <ProtectRoute>
              <AddProduct></AddProduct>
            </ProtectRoute>
          }
        ></Route>
        <Route
          path="/manage-inventory"
          element={
            <ProtectRoute>
              <Inventory></Inventory>
            </ProtectRoute>
          }
        ></Route>
        <Route
          path="/my-product"
          element={
            <ProtectRoute>
              <Myitem></Myitem>
            </ProtectRoute>
          }
        ></Route>
        <Route path="/about-us" element={<About></About>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
