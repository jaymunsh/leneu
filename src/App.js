import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import styles from './styles/common.css'

import Login from './pages/Login';
import Home from './pages/Home';
import Liked from './pages/Liked';
import MyPage from './pages/MyPage';
import RootLayout from './pages/Root';

const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/home', element: <Home /> },
      { path: '/liked', element: <Liked /> },
      { path: '/mypage', element: <MyPage /> }
    ]
  },
]);

function App() {
  return (
  <div className='wrapper'>
    <RouterProvider router={router} />
  </div>
  );
}

export default App;
