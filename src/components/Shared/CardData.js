'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const CardData = ({ image, title, events, sport, toggleDarkMode, darkMode }) => {

    return (
        <div>
            {
                darkMode ?
                    <div className="bg-[#3B3E47] ">
                        <div className="flex justify-center md:w-auto items-center pt-2 shadow-xl px-2">
                            <div>
                                <div className="image flex items-center flex-col">
                                    <Image src={image} alt={title} className="w-full h-[385px] object-cover" />
                                    <h2 className="text-lg self-start text-white capitalize py-3 font-semibold py-1">{title}</h2>
                                </div>
                                <div className="self-start bg-[#292B32] text-white pt-1 mb-2 h-[54px] rounded-md flex justify-around">
                                    <div>
                                        <p className="text-sm opacity-60">Total Events</p>
                                        <p>{events} Events</p>
                                    </div>
                                    <div>
                                        <p className="text-sm opacity-60">Sports</p>
                                        <p>{sport}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    :


                    <div className="bg-white">
                        <div className="flex justify-center md:w-auto items-center pt-2 shadow-xl px-2">
                            <div>
                                <div className="image flex items-center flex-col">
                                    <Image src={image} alt={title} className="w-full h-[385px] object-cover" />
                                    <h2 className="text-lg self-start  text-black capitalize font-semibold py-1">{title}</h2>
                                </div>
                                <div className="self-start bg-[#F7F7F8] text-black pt-1 mb-2 h-[54px] rounded-md flex justify-around">
                                    <div>
                                        <p className="text-sm opacity-60">Total Events</p>
                                        <p>{events} Events</p>
                                    </div>
                                    <div>
                                        <p className="text-sm opacity-60">Sports</p>
                                        <p>{sport}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default CardData;