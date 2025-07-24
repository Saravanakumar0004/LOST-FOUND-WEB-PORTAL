import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Request from './component/request/request.jsx'
import Admin from "./component/admin login/admin.jsx";
import Contact from './component/contact/contact.jsx'
import AdminLogin from './component/admin login/adminlogin.jsx'
import Deletedata from './component/admin login/delete & ubdate data/deletedata.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Ubdatedata from './component/admin login/delete & ubdate data/ubdatedata.jsx'
import Studentrequest from './component/request/studentrequest.jsx'
import Studentthinks from './component/studenthinks/studentthinks.jsx'
import Thingsdetials from './component/studenthinks/thingsdetials.jsx';

 const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },{
    path:'/request',
    element:<Request/>
  },{
    path:'/admin',
    element:<Admin/>
  },{
    path:'/contact',
    element:<Contact/>
  },
  {
    path:'/adminlogin',
    element:<AdminLogin/>
  },
  {
    path:'/deletedata',
    element:<Deletedata/>
  },
  {
    path:"/update/:id",
    element:<Ubdatedata/>
  },
  {
    path:'/studentrequest',
    element:<Studentrequest/>
  },
  {
    path:'/studentthinks',
    element:<Studentthinks/>
  },{
    path:'/thing/:id',
    element: <Thingsdetials/>
  }
 ])

createRoot(document.getElementById('root')).render(
 
  <RouterProvider  router={router}/>
)
