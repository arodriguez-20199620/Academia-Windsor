import React from 'react';
import { FaUserCheck, FaTachometerAlt, FaClock, FaBullseye } from 'react-icons/fa';

export const BenefitsSection = () => {
    return (
        <section className="relative overflow-hidden py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto text-center">
                    <h2 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
                        Ventajas de Elegir Clases Privadas Presenciales
                    </h2>
                    <p className="mt-4 text-base text-gray-700">
                        Las clases privadas presenciales ofrecen una serie de beneficios que mejoran tu experiencia de aprendizaje:
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-2"
                >
                    <li className="rounded-2xl border border-gray-200 p-8">
                        <h3 className="font-bold text-lg text-gray-900 flex items-center">
                            <FaUserCheck className="mr-2 text-steel-blue" size={24} />
                            Atención Personalizada
                        </h3>
                        <p className="mt-6 text-base text-gray-700">
                            Recibe feedback directo y orientación individualizada de tu tutor.
                        </p>
                    </li>
                    <li className="rounded-2xl border border-gray-200 p-8">
                        <h3 className="font-bold text-lg text-gray-900 flex items-center">
                            <FaTachometerAlt className="mr-2 text-steel-blue" size={24} />
                            Aprendizaje a Tu Ritmo
                        </h3>
                        <p className="mt-6 text-base text-gray-700">
                            Progreso adaptado a tus necesidades y velocidad de aprendizaje.
                        </p>
                    </li>
                    <li className="rounded-2xl border border-gray-200 p-8">
                        <h3 className="font-bold text-lg text-gray-900 flex items-center">
                            <FaClock className="mr-2 text-steel-blue" size={24} />
                            Flexibilidad
                        </h3>
                        <p className="mt-6 text-base text-gray-700">
                            Horarios y ubicaciones adaptadas a tu conveniencia.
                        </p>
                    </li>
                    <li className="rounded-2xl border border-gray-200 p-8">
                        <h3 className="font-bold text-lg text-gray-900 flex items-center">
                            <FaBullseye className="mr-2 text-steel-blue" size={24} />
                            Enfoque en tus Intereses
                        </h3>
                        <p className="mt-6 text-base text-gray-700">
                            El contenido del curso puede centrarse en temas que te interesen o sean relevantes para ti.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
}
