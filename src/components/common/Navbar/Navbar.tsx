"use client";

import CustomImage from "../CustomImage/CustomImageComponent";

const Navbar = () => {
    return (
        <header className="container mx-auto mb-[4rem] ">
            <nav className="flex justify-between md:justify-around bg-white/80 backdrop-blur-md shadow-md w-full px-10 fixed top-0 left-0 right-0 z-10 px-8 md:px-3">
                <div className="flex items-center">
                    <a className="cursor-pointer">
                        <h3 className="text-2xl font-medium text-blue-500 ml-4">
                            <CustomImage
                                src="/banner1.jpeg"
                                alt="Company Logo"
                                width={110}
                                height={50}
                                priority
                            />
                        </h3>
                    </a>
                </div>

                <div className="items-center md:space-x-8 justify-end justify-items-start md:justify-items-center md:flex md:pt-2 w-full left-0 top-16 px-5 md:px-10 py-3 md:py-0 border-t md:border-t-0">
                 
                </div>

            </nav>
        </header>

    );
};

export default Navbar;