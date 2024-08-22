import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { Navbar, Footer } from './components/layout';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { logo } from './assets/img';
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
      <FloatingWhatsApp
        phoneNumber="50246654564"
        accountName="Academia Windsor"
        statusMessage="En línea"
        chatMessage="¡Hola! ¿Cómo podemos ayudarte hoy?"
        avatar={logo}
        notificationSound={false}
        className='z-10'
        placeholder="Escribe un mensaje..."
        allowClickAway={true}
        height={500}
        darkMode={false}
      />
      <Footer />
    </>
  );
}

export default App
