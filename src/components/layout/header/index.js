"use client"
import { useState, useEffect, useRef } from "react";
import { menuItem } from "@/components/shared/constant";
import Hamburger from "@/components/shared/components/hamburger";

const BackDrop = ({ zIndex, isHide }) => {
    return (
        <div
            className={`h-full w-full bg-[#33333380] fixed ${zIndex} block ${isHide}`}
        ></div>
    );
};
const Menu = () => {
    return (
        <div className="menu-drawer lg:w-3/5 flex flex-col lg:flex-row lg:justify-between items-center">
            <div>
                <ul className={`flex gap-8 lg:flex-row ${isMenuDrawer ? 'flex-col' : ''}`}>
                    {
                        menuItem.map((item, index) => (
                            <li key={index}><a className='text-neutral-white' href='#'>{item.title}</a></li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <div data-aos="zoom-in-left">
                    <button className='bg-transparent text-neutral-white hover:text-neutral-black hover:lg:text-primary py-2 px-4 rounded-md'>Login</button>
                    <button className='bg-neutral-white lg:bg-primary hover:bg-primary-300 text-neutral-primary lg:text-neutral-white py-2 px-4 rounded-md'>Sign Up</button>
                </div>
            </div>
        </div>
    );
}
const Header = () => {
    const [isMenuDrawer, setIsMenuDrawer] = useState(false);
    const menuRef = useRef(null);

    const handleClick = () => {
        setIsMenuDrawer((prev) => !prev);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            if (!event.target.closest(".menu-drawer")) {
                setIsMenuDrawer(false);
            }
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1024) {
                setIsMenuDrawer(false);
            }
        };

        if (isMenuDrawer) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            document.body.classList.remove("overflow-hidden");
        };
    }, [isMenuDrawer]);

    const handleMenuClick = () => {
        setIsMenuDrawer(false);
    }
    return (
        <nav className='absolute z-50 w-full'>
            {
                isMenuDrawer && <BackDrop zIndex={"z-0"} isHide={"lg:hidden"} />
            }
            <div className='nav-container relative flex justify-between items-center'>
                <div data-aos="fade-down" className="w-40 md:w-56 lg:w-64 h-8 md:h-11 lg:h-12">
                    <img src='/images/logo.png' className="w-full h-full" alt="logo"/>
                </div>
                <div className={`menu-drawer lg:w-3/5 flex lg:flex-row lg:justify-between items-center ${isMenuDrawer ? 'transition-all duration-400 bg-primary w-full md:w-1/2 h-lvh flex-col gap-12 items-center absolute top-0 right-0 p-4' : 'bg-transparent w-0'}`}>
                    <div className={`lg:block ${isMenuDrawer ? 'block pt-36' : 'hidden'}`}>
                        <ul className={`text-center flex gap-8 lg:flex-row ${isMenuDrawer ? 'flex-col' : ''}`}>
                            {
                                menuItem.map((item, index) => (
                                    <li className="menu-item relative" key={index}><a className='tex-p1 text-neutral-white hover:text-neutral-black hover:lg:text-primary font-medium' href={item.href} onClick={handleMenuClick}>{item.title}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className={`lg:block ${isMenuDrawer ? 'block' : 'hidden'}`}>
                        <div data-aos="zoom-in-left">
                            <button className='bg-transparent text-neutral-white hover:text-neutral-black hover:lg:text-primary font-medium py-2 px-4 rounded-md'>Login</button>
                            <button className='bg-neutral-white lg:bg-primary hover:bg-primary-300 text-neutral-black py-2 px-4 font-medium rounded-md'>Sign Up</button>
                        </div>
                    </div>
                </div>
                <div className="block lg:hidden" ref={menuRef}>
                    <Hamburger isMenuDrawer={isMenuDrawer} handleClick={handleClick} />
                </div>
            </div>
        </nav>
    )
}

export default Header;