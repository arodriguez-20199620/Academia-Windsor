import { InstagramIcon, WhatsAppIcon } from '../icons';

export const Footer = () => {
    return (
        <footer className="bg-almost-black text-white py-6">
            <div className="container mx-auto px-4 lg:px-20">
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center">
                    <div className="mb-4 lg:mb-0 text-center lg:text-left">
                        <h2 className="text-lg font-bold">Contact Us</h2>
                        <p className="mt-2">
                            Phone: <a href="tel:+1234567890" className="hover:underline">+502 4665-4564</a>
                        </p>
                        <p>
                            Email: <a href="mailto:info@yourcompany.com" className="hover:underline">academiawindsorgt@gmail.com </a>
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 mt-4 lg:mt-0">
                        <h2 className="text-lg font-bold mb-2">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/academiawindsor.gt" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                                <InstagramIcon size={24} />
                            </a>
                            <a href="https://wa.me/50246654564" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                                <WhatsAppIcon size={24} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-6 text-center text-sm">
                    &copy; 2024 Academia Windsor. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
