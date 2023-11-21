import { createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Page/Home/Home/Home';
import Menu from './Page/Menu/Menu/Menu';
import OurShop from './Page/OurShop/OurShop/OurShop';
import Contact from './Page/Contact/Contact';
import Login from './Page/Login/Login';
import Register from './Page/Register/Register';
import PrivetRouter from './Component/PrivetRouter/PrivetRouter';
import Dashboard from './Page/Deshbord/Dashboard/Dashboard';
import MyCart from './Page/Deshbord/MyCart/MyCart';
import UserHome from './Page/Deshbord/UserHome/UserHome';
import Reservation from './Page/Deshbord/Reservation/Reservation';
import Payment from './Page/Deshbord/Payment/Payment';
import Review from './Page/Deshbord/Review/Review';
import MyBooking from './Page/Deshbord/MyBooking/MyBooking';

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
    {
      path:'dashboard',
      element: <Dashboard></Dashboard>,
      children:[
        {
          path: 'userHome',
          element: <UserHome></UserHome>
        },
        {
          path: '/dashboard/myCart',
          element: <MyCart></MyCart>
        },
        
        {
          path: '/dashboard/reservation',
          element: <Reservation></Reservation>
        },
        {
          path: '/dashboard/paymentHistory',
          element: <Payment></Payment>
        },
        {
          path: '/dashboard/review',
          element: <Review></Review>
        },
        {
          path: '/dashboard/myBooking',
          element: <MyBooking></MyBooking>
        }
      ]
    }
  ]);
  

export default router;