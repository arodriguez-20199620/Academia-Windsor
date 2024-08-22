import { Card } from 'primereact/card';
import { alemania, espanol, francia, italiano, portugues, reinoUnido } from '../../../assets/img';

export const LanguagesOfferedSection = () => {
    const languages = [
        { name: 'Inglés', description: 'Domina el idioma global de los negocios y la comunicación.', image: reinoUnido },
        { name: 'Español', description: 'Aprende uno de los idiomas más hablados en el mundo.', image: espanol },
        { name: 'Francés', description: 'Sumérgete en el idioma del amor y la diplomacia.', image: francia },
        { name: 'Alemán', description: 'Explora el idioma de la ingeniería y la innovación.', image: alemania },
        { name: 'Italiano', description: 'Experimenta la belleza del idioma y la cultura italiana.', image: italiano },
        { name: 'Portugués', description: 'Aprende el idioma de Portugal y Brasil.', image: portugues }
    ];

    return (
        <section className="py-20">
            <div className="w-full max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-10">Idiomas que Ofrecemos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {languages.map((language, index) => (
                        <Card key={index} title={language.name} className="shadow-lg">
                            <img
                                src={language.image}
                                alt={language.name}
                                className="h-full object-cover mb-4 rounded"
                            />
                            <p className="mt-2">{language.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
