import Image from 'next/image';
import Icon from '../../../public/IconRight.png';
import image1 from '../../../public/player1.png';
import icon2 from '../../../public/Vector (1).png';
import CradImage from '../../../public/Ticket_Mockup 3.png';
import CradImage2 from '../../../public/unnamed 1.png';
import Background from '../../../public/Background.png';

const SeconCardData = () => {
    return (
        <div className='flex flex-col justify-around md:flex-row'>
            <div className="hidden md:block border-2 md:mt-[285px] lg:mt-[280px] ml-12 lg:ml-20 h-12 border-[#2C9CF0] w-8">
                <Image className="ml-2 mt-3" src={Icon} alt="icon" />
            </div>


            {/* Cards responsive */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center max-w-screen-xl mx-auto'>
                {/* Card 1 */}
                <div className='relative '>
                    <Image src={Background} alt='background' className='h-[670px]' />
                    <div className='absolute bottom-0 mb-7'>
                        <div className="image flex justify-center  items-center -py-20 flex-col">
                            <Image src={CradImage} alt="card" className="w-full p-1 h-[470px]   object-cover" />
                        </div>
                        <div className=''>
                            <h2 className="text-[17px] mb-1 text-black  capitalize font-semibold  text-center">Las Vegas Aviators</h2>

                            <p className="text-sm text-center  text-black">Oct 15 |Sun| 4:30 PM</p>
                            <p className='opacity-60 text-center'>Las Vegas Ballpark, Las Vegas,</p>
                            <p className='opacity-60 text-center pb-8'>Nevada</p>


                        </div>
                        <div className='pl-4'>
                            <button className='bg-black text-white px-12 text-sm py-2'>Take Flight Collection</button>

                        </div>
                    </div>

                </div>


                {/* Card 2 */}
                <div className='relative '>
                    <Image src={Background} alt='background' className='h-[670px]' />
                    <div className='absolute bottom-0 mb-7'>
                        <div className="image flex justify-center  items-center -py-20 flex-col">
                            <Image src={CradImage2} alt="card" className="w-full p-1 h-[470px]   object-cover" />
                        </div>
                        <div className=''>
                            <h2 className="text-[17px] mb-1 text-black  capitalize font-semibold  text-center">Sacramento River Cats</h2>

                            <p className="text-sm text-center  text-black">Oct 15 |Sun| 4:30 PM</p>
                            <p className='opacity-60 text-center'>Las Vegas Ballpark, Las Vegas,</p>
                            <p className='opacity-60 text-center pb-8'>Nevada</p>


                        </div>
                        <div className='pl-4'>
                            <button className='bg-black text-white px-12 text-sm py-2'>Orange Collection</button>

                        </div>
                    </div>

                </div>

                {/* Card 3 */}
                <div className='relative '>
                    <Image src={Background} alt='background' className='h-[670px]' />
                    <div className='absolute bottom-0 mb-7'>
                        <div className="image flex justify-center  items-center -py-20 flex-col">
                            <Image src={CradImage} alt="card" className="w-full p-1 h-[470px]   object-cover" />
                        </div>
                        <div className=''>
                            <h2 className="text-[17px] mb-1 text-black  capitalize font-semibold  text-center">Las Vegas Aviators</h2>

                            <p className="text-sm text-center  text-black">Oct 15 |Sun| 4:30 PM</p>
                            <p className='opacity-60 text-center'>Las Vegas Ballpark, Las Vegas,</p>
                            <p className='opacity-60 text-center pb-8'>Nevada</p>


                        </div>
                        <div className='pl-4'>
                            <button className='bg-black text-white px-12 text-sm py-2'>Take Flight Collection</button>

                        </div>
                    </div>

                </div>
            </div>
            <div className='hidden md:block border-2 lg:mt-[280px] md:mt-[300px]  mr-20 h-12 border-[#2C9CF0] w-8'>
                <Image className='ml-2 mt-3 ' src={icon2} alt='icon' />
            </div>
        </div>
    );
};

export default SeconCardData;
