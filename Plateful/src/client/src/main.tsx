import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

// import App from './App.tsx';
import LandingPage from './pages/Landing/LandingPage.tsx';
import RestaurantList from './pages/Dashboard/Restaurants/Restaurants.tsx';
import RestaurantPage from './pages/Dashboard/Restaurants/RestaurantPage.tsx';
import SignIn from './pages/Sign In/signin.tsx';
import userHome from './pages/User-home/user_home.tsx';
// import Index from './routes/Index';
// import NavbarScroll from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/navbar.tsx';

// Higher-Order Component for wrapping pages with the layout
const withLayout = (Component: React.ComponentType) => (
  <React.Fragment>
    {/* <NavbarScroll /> */}
    <main className='bg-[#EBDAC5] h-screen'>
      <Navbar />
      <Component />
    </main>
    {/* <Footer /> */}
  </React.Fragment>
);

// Define routes, using the HOC directly as JSX
const router = createBrowserRouter([
  {
    path: "/",
    element: withLayout(LandingPage), // Directly use the HOC as JSX
    errorElement: <ErrorPage />,
  },
  {
    path: "/Restaurants",
    element: withLayout(RestaurantList), // Directly use the HOC as JSX
    errorElement: <ErrorPage />,
  },
  {
    path: "/restaurants/:restaurantName",
    element: <React.Fragment key="restaurant">{withLayout(RestaurantPage)}</React.Fragment>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signin",
    element: withLayout(SignIn),
    errorElement: <ErrorPage />,
  },
  {
    path:"/user-home",
    element: withLayout(userHome),
    errorElement: <ErrorPage />,
  },
]);

// Render the RouterProvider with the router configuration
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
