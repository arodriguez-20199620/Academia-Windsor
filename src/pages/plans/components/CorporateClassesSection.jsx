import { corporate } from "../../../assets/img";
import { Link } from "react-router-dom";

export const CorporateClassesSection = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div
                    className="lg:w-1/2 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Clases Corporativas
                        <br className="hidden lg:inline-block" />Para Empresas
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Ofrecemos una variedad de servicios para satisfacer las necesidades de tu empresa. Nuestros programas están diseñados para todos los niveles y sectores. Descubre cómo podemos ayudarte a alcanzar tus objetivos corporativos.
                    </p>
                    <div className="flex justify-center">
                        <Link to="/planes/clases-corporativas" onClick={() => console.log()} className="inline-flex text-white bg-dark-blue border-0 py-2 px-6 focus:outline-none hover:bg-opacity-90 rounded text-lg">
                            Conoce Más
                        </Link>
                    </div>
                </div>
                <div className="lg:w-1/2 md:w-1/2 w-full">
                    <img className="object-cover object-center rounded" alt="hero" src={corporate} />
                </div>
            </div>
        </section>
    );
}
