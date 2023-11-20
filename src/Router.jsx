import { createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Page/Home/Home/Home';
import Menu from './Page/Menu/Menu/Menu';
import OurShop from './Page/OurShop/OurShop/OurShop';
import Contact from './Page/Contact/Contact';
import Login from './Page/Login/Login';
import Register from './Page/Register/Register';
import PrivetRouter from './Component/PrivetRouter/PrivetRouter';

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/menu',
          element: <PrivetRouter><Menu></Menu></PrivetRouter>
        },
        {
          path: '/shop',
          element: <PrivetRouter><OurShop></OurShop></PrivetRouter>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
  ]);
  

export default router;