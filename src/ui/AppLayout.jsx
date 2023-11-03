import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';


function AppLayout() {
  return (
    <div className='main-container'>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default AppLayout