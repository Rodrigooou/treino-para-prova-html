import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './routes/Home.jsx';
import Sorvetes from './routes/Sorvetes.jsx';

const router = createBrowserRouter([
  {path: "/", element: <App/>,
    children:[
      {path: "/", element: <Home/>},
      {path: "/sorvetes", element: <Sorvetes/>},
    ]
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);