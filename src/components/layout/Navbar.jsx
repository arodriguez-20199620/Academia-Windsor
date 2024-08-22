import { useState, useEffect } from 'react';
import { logo } from '../../assets/img';
import { MenuIcon } from '../icons';
import { Link } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import { Badge } from 'primereact/badge';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import clsx from 'clsx';

export const Navbar = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (sidebarVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [sidebarVisible]);

    const itemRenderer = (item, index) => (
        <Link
            key={index}
            to={item.url}
            className={clsx(
                "flex align-items-center p-menuitem-link cursor-pointer transition duration-300",
                {
                    "text-gray-800 hover:text-light-sky-blue": !isScrolled,
                    "text-white hover:text-black": isScrolled
                }
            )}
            onClick={() => setSidebarVisible(false)}
        >
            {item.icon && <span className={item.icon} />}
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </Link>
    );

    const items = [
        {
            label: 'Inicio',
            url: '/'
        },
        {
            label: 'Planes',
            url: '/planes'
        },
        {
            label: 'Tutores',
            url: '/tutores'
        },
        {
            label: 'Contacto',
            url: '/contacto'
        }
    ];

    const start = <img alt="logo" src={logo} className="mr-4 h-20 lg:h-32 py-1.5" />;

    const end = (
        <div className="hidden md:flex space-x-8">
            {items.map(itemRenderer)}
        </div>
    );

    const mobileMenu = (
        <Sidebar
            visible={sidebarVisible}
            onHide={() => setSidebarVisible(false)}
            showCloseIcon={true}
            className="p-sidebar-lg z-50"
            modal={true}
            closeOnEscape={true}
        >
            <div className="flex justify-between items-center px-4 py-2">
                <div className="text-xl font-bold">Menú</div>
                <Button
                    icon="pi pi-times"
                    className="p-button-text"
                    onClick={() => setSidebarVisible(false)}
                />
            </div>
            <div className="flex flex-col space-y-4 mt-4">
                {items.map((item, index) => (
                    <Link
                        key={index}
                        to={item.url}
                        className="flex items-center py-3 px-4 text-lg text-gray-800 hover:text-light-sky-blue transition duration-300"
                        onClick={() => setSidebarVisible(false)}
                    >
                        {item.icon && <span className={`mr-3 ${item.icon}`} />}
                        <span>{item.label}</span>
                        {item.badge && <Badge className="ml-auto" value={item.badge} />}
                    </Link>
                ))}
            </div>
        </Sidebar>
    );

    return (
        <div className={clsx('w-full shadow-md sticky top-0 z-10 transition-colors duration-300', {
            'bg-white': !isScrolled,
            'bg-sky-blue text-white': isScrolled
        })}>
            {mobileMenu}
            <Menubar
                start={start}
                end={
                    <>
                        <div className="md:hidden">
                            <Button
                                icon={<MenuIcon size={32} />}
                                onClick={() => setSidebarVisible(true)}
                                className={clsx(
                                    'p-button-text w-14',
                                    {
                                        'text-dark-blue': !isScrolled,
                                        'text-white': isScrolled
                                    }
                                )}
                            />
                        </div>
                        {end}
                    </>
                }
                className="container mx-auto bg-transparent border-none"
            />
        </div>
    );
};
