import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Dashboard } from './component/Dashboard/Dashboard';
import { Popup } from './component/Popup/Popup';


function App() {
  const getData = async () =>{
    const res = await fetch("https://assets.alippo.com/catalog/static/data.json")
    return res
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      loader: getData
    },
    
  ]);

  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
