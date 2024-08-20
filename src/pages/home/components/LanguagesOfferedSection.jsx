import React from 'react';
import { Card } from 'primereact/card';
import { alemania, espanol, francia, italiano, portugues, reinoUnido } from '../../../assets/img';

export const LanguagesOfferedSection = () => {
    const languages = [
        { name: 'English', description: 'Master the global language of business and communication.', image: reinoUnido },
        { name: 'Spanish', description: 'Learn one of the most spoken languages in the world.', image: espanol },
        { name: 'French', description: 'Immerse yourself in the language of love and diplomacy.', image: francia },
        { name: 'German', description: 'Explore the language of engineering and innovation.', image: alemania },
        { name: 'Italian', description: 'Experience the beauty of Italian language and culture.', image: italiano },
        { name: 'Portuguese', description: 'Learn the language of Portugal and Brazil.', image: portugues }
    ];

    return (
        <section className="py-20 0">
            <div className="w-full max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-10">Languages We Offer</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {languages.map((language, index) => (
                        <Card key={index} title={language.name} className="shadow-lg">
                            <img
                                src={language.image}
                                alt={language.name}
                                className="h-full  object-cover mb-4 rounded"
                            />
                            <p className="mt-2">{language.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
