export const ServicesSection = () => {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
          Servicios de Inglés Corporativo
        </h2>
        <p className="mb-5 font-light text-gray-500 sm:text-xl">
          Ofrecemos una variedad de servicios para satisfacer las necesidades de tu empresa.
          Nuestros programas están diseñados para todos los niveles y sectores.
          Descubre cómo podemos ayudarte a alcanzar tus objetivos corporativos.
        </p>
      </div>

      <div className="space-y-8 mb-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8">
          <h3 className="mb-4 text-2xl font-semibold">Clases Presenciales</h3>
          <p className="font-light text-gray-500 sm:text-lg">
            Instrucción cara a cara adaptada a tu horario y lugar.
          </p>
        </div>

        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8">
          <h3 className="mb-4 text-2xl font-semibold">Clases Virtuales</h3>
          <p className="font-light text-gray-500 sm:text-lg">
            Flexibilidad total con clases en línea interactivas.
          </p>
        </div>

        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8">
          <h3 className="mb-4 text-2xl font-semibold">Cursos a Medida</h3>
          <p className="font-light text-gray-500 sm:text-lg">
            Programas diseñados específicamente para tu industria y objetivos.
          </p>
        </div>
      </div>
    </div>
  );

};