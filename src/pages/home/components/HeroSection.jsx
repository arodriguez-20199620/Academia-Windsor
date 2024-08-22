import { nosotros1 } from "../../../assets/img";

export const HeroSection = () => {
    return (
        <section className="container mx-auto flex flex-col md:flex-row justify-center  mb-10 p-4">
            {/* Primera Sección: Imagen */}
            <div className="w-full md:w-2/5 mb-6 md:mb-0">
                <img src={nosotros1} alt="Misión" className="w-full h-full object-cover" />
            </div>
            {/* Segunda Sección: Texto */}
            <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center md:text-left">
                    Masteriza el inglés, alemán o francés
                </h1>
                <div className="max-w-full md:max-w-sm mx-auto md:mx-0">
                    <p className="text-lg mb-4 text-center md:text-left">
                        Nuestra misión es crear un ambiente de aprendizaje estimulante y acogedor donde puedas mejorar
                        tus habilidades lingüísticas de manera significativa. Ya sea que desees aprender un nuevo idioma por
                        razones profesionales, académicas o personales, estamos aquí para ayudarte en cada paso del camino.
                    </p>
                    <p className="text-lg text-center md:text-left">
                        Nuestro equipo de profesores altamente calificados está comprometido a brindar la mejor enseñanza
                        posible, utilizando métodos innovadores y materiales actualizados.
                    </p>
                    <p className="text-lg mb-4 text-center md:text-left">¡Te esperamos en nuestra academia!</p>
                    <div className="flex justify-center md:justify-start">
                        <button className="bg-dark-blue text-white px-7 py-3 rounded hover:bg-opacity-90 transition-colors duration-200">
                            Contáctanos
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
