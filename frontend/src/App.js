import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import {loader as projectsLoader} from './layout/ProjectSection'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
  { path: '/', 
    element: <Home />,
    loader: projectsLoader      
  },
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {path: 'about-me', element: <AboutMe />},
      {path: 'contact', element: <Contact />}
    ]
  }    
])


function App() {
  return (
    <div className='container'>
      <RouterProvider router={router} />
      <ToastContainer 
          position="top-center"
          autoClose={3003}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light" />
    </div>
  );
}

export default App;
