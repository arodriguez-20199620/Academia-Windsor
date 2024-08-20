import { nosotros1 } from "../../../assets/img";

export const HeroSection = () => {
    return (
        <section className="container mx-auto flex justify-center mb-10">
            {/* Primera Sección: Imagen */}
            <div className="w-2/5">
                <img src={nosotros1} alt="Misión" className="w-full h-full object-cover" />
            </div>
            {/* Segunda Sección: Texto */}
            <div className="w-2/5  p-8 flex flex-col justify-center">
                <h1 className="text-5xl font-bold mb-4">Masteriza el inglés, alemán o francés</h1>
                <div className="max-w-sm">
                    <p className="text-lg mb-4">
                        Nuestra misión es crear un ambiente de aprendizaje estimulante y acogedor donde puedas mejorar
                        tus habilidades lingüísticas de manera significativa. Ya sea que desees aprender un nuevo idioma por
                        razones profesionales, académicas o personales, estamos aquí para ayudarte en cada paso del camino.
                    </p>
                    <p className="text-lg">
                        Nuestro equipo de profesores altamente calificados está comprometido a brindar la mejor enseñanza
                        posible, utilizando métodos innovadores y materiales actualizados.
                    </p>
                    <p className="text-lg mb-4">¡Te esperamos en nuestra academia!</p>
                <button className="bg-burnt-red text-white px-7 py-3 rounded hover:brightness-95">
                    Contáctanos
                </button>
                </div>
            </div>
        </section>
    );
};
