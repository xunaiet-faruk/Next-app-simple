import Image from 'next/image';
import React from 'react';

const Crads = ({ image, title, events, sport }) => {
    return (
        <div>
            <div className="bg-[#3B3E47]">
                <div className="flex justify-center md:w-auto items-center pt-2 shadow-lg px-2">
                    <div>
                        <div className="image flex items-center flex-col">
                            <Image src={image} alt={title} className="w-full h-[385px] object-cover" />
                            <h2 className="text-lg self-start capitalize font-semibold py-1">{title}</h2>
                        </div>
                        <div className="self-start bg-[#292B32] pt-1 mb-2 h-[54px] rounded-md flex justify-around">
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
        </div>
    );
};

export default Crads;