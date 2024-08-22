export const ProcessSection = () => {
    return (
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
            <div className="text-center">
                
                <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
                    Nuestro Proceso para <span className="text-steel-blue">Clases Privadas</span>
                </h3>
                <p className="mt-4 text-base leading-6 text-gray-700">
                    Sigue estos pasos para comenzar tu viaje de aprendizaje con nosotros:
                </p>
            </div>

            <div className="mt-20">
                <ul className="md:grid md:grid-cols-4 md:col-gap-10 md:row-gap-10">
                    <li className="bg-gray-100 p-5 pb-10 text-center">
                        <div className="flex flex-col items-center">
                            <div className="flex-shrink-0 relative top-0 -mt-16">
                                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-light-sky-blue text-white border-4 border-white text-xl font-semibold">
                                    1
                                </div>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-lg leading-6 font-semibold text-gray-900">Consulta Inicial</h4>
                                <p className="mt-2 text-base leading-6 text-gray-500">
                                    Realiza una evaluación inicial para determinar tu nivel y objetivos.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="bg-gray-100 p-5 pb-10 text-center">
                        <div className="flex flex-col items-center">
                            <div className="flex-shrink-0 relative top-0 -mt-16">
                                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-light-sky-blue text-white border-4 border-white text-xl font-semibold">
                                    2
                                </div>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-lg leading-6 font-semibold text-gray-900">Diseño del Programa</h4>
                                <p className="mt-2 text-base leading-6 text-gray-500">
                                    Creamos un plan de estudio adaptado a tus necesidades y metas.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="bg-gray-100 p-5 pb-10 text-center">
                        <div className="flex flex-col items-center">
                            <div className="flex-shrink-0 relative top-0 -mt-16">
                                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-light-sky-blue text-white border-4 border-white text-xl font-semibold">
                                    3
                                </div>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-lg leading-6 font-semibold text-gray-900">Programación de Clases</h4>
                                <p className="mt-2 text-base leading-6 text-gray-500">
                                    Establece tu horario y ubicación preferidos.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="bg-gray-100 p-5 pb-10 text-center">
                        <div className="flex flex-col items-center">
                            <div className="flex-shrink-0 relative top-0 -mt-16">
                                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-light-sky-blue text-white border-4 border-white text-xl font-semibold">
                                    4
                                </div>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-lg leading-6 font-semibold text-gray-900">Inicio de Clases</h4>
                                <p className="mt-2 text-base leading-6 text-gray-500">
                                    Comienza tus clases presenciales con un tutor dedicado a tu progreso.
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
