import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

// import App from './App.tsx';
import Reasturants from './pages/Dashboard/Dashboard.tsx'
// import Index from './routes/Index';
// import NavbarScroll from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
import ErrorPage from './pages/ErrorPage';

// Higher-Order Component for wrapping pages with the layout
const withLayout = (Component: React.ComponentType) => (
  <React.Fragment>
    {/* <NavbarScroll /> */}
    <main><Component /></main>
    {/* <Footer /> */}
  </React.Fragment>
);

// Define routes, using the HOC directly as JSX
const router = createBrowserRouter([
  // {
    // path: "/",
    // element: withLayout(Index), // Directly use the HOC as JSX
    // errorElement: <ErrorPage />,
  // },
  {
    path: "/",
    element: withLayout(Reasturants), // Directly use the HOC as JSX
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
