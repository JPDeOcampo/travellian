"use client"
import { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const UpButton = () => {
    const [scrollShow, setScrollShow] = useState(false);

    const handleScroll = () => {
        if (window.scrollY < 180) {
            setScrollShow(true);
        } else {
            setScrollShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {
                !scrollShow && <div className="fixed z-50 bottom-8 right-7 w-14 md:w-16 h-14 md:h-16 flex items-center justify-center bg-primary hover:bg-primary-300 rounded-full" data-aos="fade-up">
                    <a className="[&_svg]:text-neutral-white text-h1" href={'#home'}><MdKeyboardArrowUp /></a>
                </div>
            }
        </>

    )
}

export default UpButton;