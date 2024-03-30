'use client'
import { useState } from "react";
import Card from "./Card";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md"

import '../../components/Shared/HomePage.css'
import ToggleButton from "./ToggleButton";
const HomePage = ({ toggleDarkMode, darkMode }) => {

    return (
        <div>

            <div className="flex justify-between px-4 md:px-10 lg:px-20 items-center">
                <div className="border-b-2 md:ml-10 border-[#738FFF] w-fit">
                    <h1 className="text-lg md:text-2xl font-semibold pt-3 md:pt-9">Sports</h1>
                </div>

                <div className={`p-2 md:p-4 ${darkMode ? 'shadow-xl rounded-full shadow-[#292B32]' : 'shadow-xl rounded-full'}`}>
                    {
                        darkMode ?
                            <MdOutlineDarkMode className="mt-2 md:mt-4 text-2xl md:text-4xl border-2 rounded-full" onClick={toggleDarkMode} />
                            :
                            <CiLight className="mt-2 md:mt-4 text-2xl md:text-4xl text-black border-2 rounded-full" onClick={toggleDarkMode} />
                    }
                </div>
            </div>


            <Card toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        </div>
    );
};

export default HomePage;