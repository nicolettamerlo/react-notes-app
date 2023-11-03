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

// function App() {


//   return (
//     <div className='board'>
//       <Header />
//       <AddNewNote />
//       <NotesList />
//       <Footer />
//     </div>
//   )
// }

// export default App


// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     errorElement: <Error />,

//     children: [
//       {
//         path: '/',
//         element: <Home />,
//       },
//       {
//         path: '/menu',
//         element: <Menu />,
//         loader: menuLoader,
//         errorElement: <Error />,
//       },
//       { path: '/cart', element: <Cart /> },
//       {
//         path: '/order/new',
//         element: <CreateOrder />,
//         action: createOrderAction,
//       },
//       {
//         path: '/order/:orderId',
//         element: <Order />,
//         loader: orderLoader,
//         errorElement: <Error />,
//         action: updateOrderAction,
//       },
//     ],
//   },
// ]);


