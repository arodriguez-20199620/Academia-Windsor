export const ServicesSection = () => {
    return (
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-10 lg:px-6">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                <h1 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
                    ¿Qué Ofrecemos en Nuestras Clases Privadas Presenciales?
                </h1>
                <p className="mb-5 font-light text-gray-500 sm:text-xl">
                    Nuestras clases privadas están diseñadas para proporcionar una experiencia de aprendizaje intensa y personalizada. Aquí está lo que ofrecemos:
                </p>
            </div>

            <div className="space-y-8 mb-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
                <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8">
                    <h3 className="mb-4 text-2xl font-semibold">Clases Personalizadas</h3>
                    <p className="font-light text-gray-500 sm:text-lg">
                        Diseñadas según tu nivel y objetivos específicos.
                    </p>
                </div>

                <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8">
                    <h3 className="mb-4 text-2xl font-semibold">Horarios Flexibles</h3>
                    <p className="font-light text-gray-500 sm:text-lg">
                        Elige el horario que mejor se adapte a tu agenda.
                    </p>
                </div>

                <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8">
                    <h3 className="mb-4 text-2xl font-semibold">Materiales Exclusivos</h3>
                    <p className="font-light text-gray-500 sm:text-lg">
                        Utilizamos materiales y recursos adaptados a tus intereses y necesidades.
                    </p>
                </div>

                <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8">
                    <h3 className="mb-4 text-2xl font-semibold">Tutorías Intensivas</h3>
                    <p className="font-light text-gray-500 sm:text-lg">
                        Opciones de sesiones más largas para un aprendizaje más rápido.
                    </p>
                </div>
            </div>
        </div>
    );
}
