import { Card } from 'primereact/card';

export const FAQSection = () => {
  return (
    <section className="my-8 p-12 ">
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">Preguntas Frecuentes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card title="¿Qué niveles de inglés cubren sus cursos?" className="shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <p className="text-gray-700">
            Nuestros cursos están disponibles para todos los niveles, desde principiante hasta avanzado.
          </p>
        </Card>
        <Card title="¿Ofrecen descuentos para grupos grandes?" className="shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <p className="text-gray-700">
            Sí, ofrecemos tarifas especiales para grupos y empresas con varios empleados.
          </p>
        </Card>
        <Card title="¿Cómo se adaptan los cursos a las necesidades de mi empresa?" className="shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <p className="text-gray-700">
            Trabajamos directamente contigo para diseñar un programa que se ajuste a los objetivos y desafíos específicos de tu empresa.
          </p>
        </Card>
        <Card title="¿Cuál es la duración de los cursos?" className="shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <p className="text-gray-700">
            La duración de los cursos se ajusta a las necesidades y metas de tu empresa, ofreciendo opciones de corto y largo plazo.
          </p>
        </Card>
      </div>
    </section>
  );
};