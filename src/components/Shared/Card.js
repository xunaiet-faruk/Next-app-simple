import Image from 'next/image';
import React from 'react';
import player1 from '../../../public/player1.png';
import pic1 from '../../../public/Pic2 (1).png';
import pic2 from '../../../public/pic2.png';
import pic3 from '../../../public/Pic2 (3).png';
import Crads from './Crads';

const Card = () => {
    return (
       <div>
            <div className=" flex text-black min-h-[1778px] flex-col items-center gap-10 relative">
                <section>
                    <div className="text-white md:min-h-[673px] w-[90vw] mb-10">
                       
                        <div className="flex flex-wrap justify-center gap-3 p-4">
                            <Crads image={player1} title="Sacramento River Cats" events="48" sport="baseball" />
                            <Crads image={pic1} title="Las Vegas Aviators" events="28" sport="baseball" />
                            <Crads image={pic2} title="New Jersey Devils" events="15" sport="ice hockey" />
                            <Crads image={pic1} title="Las Vegas Aviators" events="28" sport="baseball" />
                            <div className="bg-[#3B3E47] flex justify-between flex-col items-center h-full shadow-lg pt-2 px-2">
                                <div className="w-[217px] h-[97%] border border-[#006555]">
                                    <div className="relative">
                                        <Image src={pic3} alt="advertisement" className="object-cover" />
                                        <button className="absolute top-0 right-0 bg-black text-white w-[47.78px]">Ad</button>
                                    </div>
                                    <div className="mt-4 text-center">
                                        <p className="font-semibold text-[20px]">Advertisement title</p>
                                        <h2 className="text-[12.8px] text-justify line-height-2 px-3 py-1">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center pt-10">
                            <button className="bg-[#2C9CF0] px-8 rounded-md py-3 text-white">See More</button>
                        </div>
                    </div>
                </section>
            </div>
       </div>
    );
};

export default Card;
