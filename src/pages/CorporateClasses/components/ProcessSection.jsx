import { Accordion, AccordionTab } from 'primereact/accordion';
import { FaSearch, FaChalkboardTeacher, FaPlay, FaCheckCircle } from 'react-icons/fa';

export const ProcessSection = () => {
  return (
    <section className="my-8 p-12">
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">Cómo Funciona Nuestro Proceso</h2>
      <Accordion className="shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <AccordionTab header="Consulta Inicial">
          <div className="flex items-center space-x-4">
            <FaSearch className="text-3xl text-green-500" />
            <p className="text-gray-700">
              Evaluamos las necesidades de tu empresa y establecemos objetivos.
            </p>
          </div>
        </AccordionTab>
        <AccordionTab header="Desarrollo del Programa">
          <div className="flex items-center space-x-4">
            <FaChalkboardTeacher className="text-3xl text-blue-500" />
            <p className="text-gray-700">
              Creamos un curso personalizado que se ajusta a tus necesidades específicas.
            </p>
          </div>
        </AccordionTab>
        <AccordionTab header="Implementación">
          <div className="flex items-center space-x-4">
            <FaPlay className="text-3xl text-yellow-500" />
            <p className="text-gray-700">
              Iniciamos las clases en el formato que prefieras, ya sea presencial o en línea.
            </p>
          </div>
        </AccordionTab>
        <AccordionTab header="Evaluación y Feedback">
          <div className="flex items-center space-x-4">
            <FaCheckCircle className="text-3xl text-red-500" />
            <p className="text-gray-700">
              Monitoreamos el progreso y ajustamos el contenido según sea necesario.
            </p>
          </div>
        </AccordionTab>
      </Accordion>
    </section>
  );
};
