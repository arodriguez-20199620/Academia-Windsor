import { Accordion, AccordionTab } from 'primereact/accordion';

export const FAQSection = () => {
    return (
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="text-center">
                <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
                    Preguntas Frecuentes
                </h3>
                <p className="mt-4 text-base leading-6 text-gray-700">
                    Aquí respondemos a las dudas más comunes sobre nuestras clases privadas presenciales.
                </p>
            </div>

            <div className="mt-10">
                <Accordion>
                    <AccordionTab header="¿Qué idiomas puedo estudiar en las clases privadas?">
                        <p>
                            Ofrecemos clases en una variedad de idiomas. Contáctanos para conocer la disponibilidad.
                        </p>
                    </AccordionTab>
                    <AccordionTab header="¿Puedo cambiar el horario de mis clases si necesito?">
                        <p>
                            Sí, ofrecemos flexibilidad para ajustar tu horario según tus necesidades.
                        </p>
                    </AccordionTab>
                    <AccordionTab header="¿Qué materiales necesito para las clases?">
                        <p>
                            Nosotros proporcionamos todos los materiales necesarios. También puedes traer tus propios recursos si lo prefieres.
                        </p>
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    );
}
