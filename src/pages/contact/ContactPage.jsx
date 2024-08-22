import React from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { Card } from 'primereact/card';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const ContactPage = () => {
    useDocumentTitle('Academia Windsor | Contacto')
    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/academiawindsor.gt', '_blank');
    };

    const handleWhatsappClick = () => {
        window.open('https://wa.me/50246654564?text=Hola,%20me%20gustaría%20solicitar%20más%20información.', '_blank');
    };

    const handleEmailClick = () => {
        window.location.href = 'mailto:academiawindsorgt@gmail.com';
    };

    const handlePhoneClick = () => {
        window.location.href = 'tel:46654565';
    };

    return (
        <div
            className="flex justify-center items-center min-h-[calc(100vh-96px)] lg:min-h-[calc(100vh-144px)] bg-cover bg-center px-2"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1616094620696-15a31bf047ed?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        >
            <Card className="p-3 lg:p-8 shadow-2xl rounded-lg bg-white max-w-lg w-full backdrop-blur-md bg-opacity-90">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Contáctanos</h2>
                <div className="space-y-6">
                    <div
                        className="flex items-center space-x-4 cursor-pointer"
                        onClick={handleInstagramClick}
                    >
                        <FaInstagram className="text-pink-500 text-2xl" />
                        <span className="text-xl font-medium text-gray-700">@academiawindsor.gt</span>
                    </div>
                    <div
                        className="flex items-center space-x-4 cursor-pointer"
                        onClick={handleWhatsappClick}
                    >
                        <FaWhatsapp className="text-green-500 text-2xl" />
                        <span className="text-xl font-medium text-gray-700">+502 4665-4564</span>
                    </div>
                    <div
                        className="flex items-center space-x-4 cursor-pointer"
                        onClick={handleEmailClick}
                    >
                        <FaEnvelope className="text-blue-500 text-2xl" />
                        <span className="text-xl font-medium text-gray-700">academiawindsorgt@gmail.com</span>
                    </div>
                    <div
                        className="flex items-center space-x-4 cursor-pointer"
                        onClick={handlePhoneClick}
                    >
                        <FaPhoneAlt className="text-purple-500 text-2xl" />
                        <span className="text-xl font-medium text-gray-700">+502 4665-4564</span>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default ContactPage;
