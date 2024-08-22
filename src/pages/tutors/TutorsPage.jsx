import { persona1, persona2, persona3 } from '../../assets/img';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const TutoresPage = () => {
    useDocumentTitle('Academia Windsor | Tutores')
    return (
        <div className="py-16 px-6 mx-auto max-w-screen-xl min-h-[calc(100vh-96px)] lg:min-h-[calc(100vh-144px)]">
            <div className="mx-auto max-w-screen-md text-center mb-12">
                <h2 className="mb-6 text-5xl font-bold tracking-tight text-gray-900">
                    Nuestros Tutores
                </h2>
                <p className="mb-8 text-lg text-gray-600">
                    Conoce a nuestros tutores expertos que te guiarán en tu camino de aprendizaje del inglés.
                    Cada uno de ellos tiene años de experiencia y está comprometido con tu éxito.
                </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
                {/* Card 1 */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <img
                        src={persona1}
                        alt="Tutora 1"
                        className="w-full h-96 object-cover"
                    />
                    <div className="p-6">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Tutora 1</h3>
                        <p className="text-gray-600 mb-4">
                            Experta en inglés con varios años de experiencia enseñando a estudiantes de diferentes niveles.
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <img
                        src={persona2}
                        alt="Tutor 2"
                        className="w-full h-96 object-cover"
                    />
                    <div className="p-6">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Tutor 2</h3>
                        <p className="text-gray-600 mb-4">
                            Especialista en el uso de tecnología para mejorar la enseñanza del inglés.
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <img
                        src={persona3}
                        alt="Tutora 3"
                        className="w-full h-96 object-cover"
                    />
                    <div className="p-6">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Tutora 3</h3>
                        <p className="text-gray-600 mb-4">
                            Experta en preparación para exámenes de inglés, como TOEFL e IELTS.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutoresPage;
