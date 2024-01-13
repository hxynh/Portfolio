import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import {loader as projectsLoader} from './layout/ProjectSection'



const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', 
        element: <Home />,
        loader: projectsLoader      
    },
      {path: 'about-me', element: <AboutMe />},
      {path: 'contact', element: <Contact />}
    ]
  }
])


function App() {
  return (
    <div className='container'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
