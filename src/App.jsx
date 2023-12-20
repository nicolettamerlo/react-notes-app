import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './scss/main.scss';
import AppLayout from './ui/AppLayout';
import  Error from './ui/Error';
import  Board from './ui/Board';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: '/',
        element: <Board />,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
