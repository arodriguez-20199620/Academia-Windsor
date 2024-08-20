import React, { useState, useEffect } from 'react';
import { favicon } from '../../assets/img';
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

    const itemRenderer = (item, index) => (
        <Link
            key={index}
            to={item.url}
            className={clsx(
                "flex align-items-center p-menuitem-link cursor-pointer transition duration-300",
                {
                    "text-gray-800 hover:text-golden-yellow": !isScrolled,
                    "text-white hover:text-black": isScrolled
                }
            )}
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
            label: 'Nosotros',
            url: '/nosotros'
        },
        {
            label: 'Contacto',
            url: '/contacto'
        }
    ];

    const start = <img alt="logo" src={favicon} className="mr-4 h-20 lg:h-32 py-1.5" />;

    const end = (
        <div className="hidden md:flex space-x-8">
            {items.map(itemRenderer)}
        </div>
    );

    const mobileMenu = (
        <Sidebar visible={sidebarVisible} onHide={() => setSidebarVisible(false)}>
            {items.map(itemRenderer)}
        </Sidebar>
    );

    return (
        <div className={clsx('w-full shadow-md sticky top-0 z-10 transition-colors duration-300', {
            'bg-white': !isScrolled,
            'bg-golden-yellow text-white': isScrolled
        })}>
            {mobileMenu}
            <Menubar
                start={start}
                end={
                    <>
                        <div className="md:hidden">
                            <Button icon={<MenuIcon size={32} />} onClick={() => setSidebarVisible(true)} className="p-button-text w-14" />
                        </div>
                        {end}
                    </>
                }
                className="container mx-auto bg-transparent border-none"
            />
        </div>
    );
};
