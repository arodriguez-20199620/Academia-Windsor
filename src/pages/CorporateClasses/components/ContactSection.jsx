export const ContactSection = () => {
    return (
        <div className="py-16 px-4 mx-auto max-w-screen-xl text-center">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
          ¡Estamos Aquí para Ayudarte!
        </h2>
        <p className="mb-8 font-light text-gray-500 sm:text-xl">
          ¿Tienes preguntas o deseas comenzar? Contáctanos para más información.
        </p>
        <a 
          href="/contacto"
          className="inline-block text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:ring-teal-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Contáctanos
        </a>
      </div>
    );
};

