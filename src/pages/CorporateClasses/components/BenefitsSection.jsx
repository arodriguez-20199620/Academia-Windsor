import { Panel } from 'primereact/panel';
import { FaGlobe, FaChartLine, FaUserGraduate, FaCogs } from 'react-icons/fa';

export const BenefitsSection = () => {
  return (
    <section className="p-12 ">
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">¿Por Qué Elegir Nuestros Cursos?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Panel header="Mejora de la Comunicación Internacional" className="shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center justify-center mb-4">
            <FaGlobe className="text-5xl text-green-500" />
          </div>
          <p className="text-gray-700 text-center">
            Optimiza las interacciones con clientes y socios globales.
          </p>
        </Panel>
        <Panel header="Incremento de la Productividad" className="shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center justify-center mb-4">
            <FaChartLine className="text-5xl text-blue-500" />
          </div>
          <p className="text-gray-700 text-center">
            Reduce malentendidos y mejora la eficiencia en el trabajo.
          </p>
        </Panel>
        <Panel header="Desarrollo Profesional" className="shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center justify-center mb-4">
            <FaUserGraduate className="text-5xl text-yellow-500" />
          </div>
          <p className="text-gray-700 text-center">
            Fomenta el crecimiento y la confianza de tus empleados.
          </p>
        </Panel>
        <Panel header="Adaptación a Necesidades Específicas" className="shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center justify-center mb-4">
            <FaCogs className="text-5xl text-red-500" />
          </div>
          <p className="text-gray-700 text-center">
            Contenido personalizado que aborda los desafíos particulares de tu industria.
          </p>
        </Panel>
      </div>
    </section>
  );
};