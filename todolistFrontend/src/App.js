import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import VerticalNavBar from './components/VerticalNavBar/VerticalNavBar';
import AllTasks from './components/AllTasks/AllTasks';
import HighPriority from './components/HighPriority/HighPriority';
import MediumPriority from './components/MediumPriority/MediumPriority';
import LowPriority from './components/LowPriority/LowPriority';
function App() {
  let router=createBrowserRouter([
   {
     path:"/",
     element:<RootLayout/>,
     children:[
      {
        path:"/",
        element:<AllTasks/>
      },
      {
        path:"/AllTasks",
        element:<AllTasks/>
      },
      {
        path:"/HighPriority",
        element:<HighPriority/>
      },
      {
        path:"/MediumPriority",
        element:<MediumPriority/>
      },
      {
        path:"/LowPriority",
        element:<LowPriority/>
      }
     ]
   } 
  ])
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
