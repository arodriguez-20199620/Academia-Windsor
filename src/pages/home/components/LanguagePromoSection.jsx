import { nosotros2 } from '../../../assets/img';

export const LanguagePromoSection = () => {
    return (
        <section className="flex items-center justify-center py-20 bg-light-sky-blue">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto">
                <div className="hidden md:block">
                    <img
                        src={nosotros2}
                        alt="Flying Bird"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="bg-black text-white p-20 flex flex-col justify-center min-h-[600px] md:min-h-[600px]">
                    <p className="text-pale-cyan uppercase mb-4">Learn a new language</p>
                    <h1 className="text-4xl font-bold mb-4">Comienza Ahora!</h1>
                    <p className="mb-6">Discover the joy of learning languages with our expert tutors</p>
                </div>
            </div>
        </section>
    );
};
