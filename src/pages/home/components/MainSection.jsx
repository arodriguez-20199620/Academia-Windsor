import { ChipSection } from "./ChipSection";

export const MainSection = () => {
    return (
        <>
            <div className="py-12 sm:py-24 bg-dark-blue ">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-8 flex justify-center">
                        <p
                            className="relative rounded-full px-4 py-1.5 text-sm leading-6 bg-gray-100 text-gray-700 ">
                            <span className="hidden md:inline">Tu futuro es hablar otro idioma, ¿estás listo para entenderlo?</span>
                        </p>
                    </div>
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                            Academia Windsor
                        </h1>
                        <p className="mt-6 text-md leading-8 text-white">
                            ¡Bienvenidos a nuestra academia de idiomas! Somos un centro dedicado a proporcionar una experiencia educativa de alta calidad en inglés, francés y alemán. Nuestro compromiso es ayudarte a alcanzar tus metas lingüísticas de manera efectiva y divertida.
                        </p>
                        <ChipSection />
                    </div>
                </div>
            </div>
        </>
    );
}
