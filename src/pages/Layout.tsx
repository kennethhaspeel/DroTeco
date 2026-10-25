import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <>
      <div className="flex h-screen flex-col">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Header />
        </div>
        <div className="flex w-full min-h-0 flex-1 flex-col overflow-y-auto">
          <main className="flex flex-1 flex-col">
            <Outlet />
          </main>
        </div>
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;