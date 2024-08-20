import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { Navbar, Footer } from './components/layout';
import routes from './routes'
import "./App.css"

const Routes = () => {
  const routing = useRoutes(routes);
  return routing;
};


const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={null}>
        <Routes />
      </Suspense>
      <Footer />
    </>
  );
}

export default App
