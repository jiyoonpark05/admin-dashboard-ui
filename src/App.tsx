import Home from "./pages/home/Home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import "./styles/global.scss";
import "./App.scss";
import User from "./components/user/User";
import Product from "./components/product/Product";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
  };

  const Layout = () => {
    return (
      <div className="main">
        <Navbar handleTheme={toggleTheme} isDark={isDark} />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/users", element: <Users /> },
        { path: "/products", element: <Products /> },
        { path: "/users/:id", element: <User /> },
        { path: "/products/:id", element: <Product /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
