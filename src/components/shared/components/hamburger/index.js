"use client";
import { useContext, useEffect } from "react";

const Hamburger = ({ isMenuDrawer, handleClick }) => {
    //   const { setIsMenuDrawer, isMenuDrawer, setIsMenuClick, menuRef } =
    //     useContext(shareContext);

   



    const menuClass = `w-6 h-[3px] rounded bg-neutral-white duration-400`;

    return (
        <div className={`flex p-[24px]`}>
            <div className="flex justify-center items-center w-6 h-6">
                <div className="inline-block cursor-pointer" onClick={handleClick}>
                    <div
                        className={`transition-transform ${menuClass} ${isMenuDrawer ? "translate-y-[8px] rotate-[45deg]" : ""
                            }`}
                    ></div>
                    <div
                        className={`transition-opacity my-[4px] ${menuClass} ${isMenuDrawer ? "opacity-0" : ""
                            }`}
                    ></div>
                    <div
                        className={`transition-transform ${menuClass} ${isMenuDrawer ? "translate-y-[-5px] rotate-[-45deg]" : ""
                            }`}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Hamburger;
