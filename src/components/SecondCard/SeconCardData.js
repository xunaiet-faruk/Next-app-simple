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
            <div className='border-2 h-12 border-[#2C9CF0] w-8 mt-2 md:mt-0'>
                <Image className='ml-2 mt-3' src={Icon} alt='icon' />
            </div>

            {/* Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center max-w-screen-xl mx-auto'>
                {/* Card 1 */}
                <div className='relative'>
                    <Image src={Background} alt='background' />
                    <div className='absolute bottom-0'>
                        <div className="image flex justify-center items-center flex-col">
                            <Image src={CradImage} alt="card" className="w-full p-1 h-[450px] mb-12 object-cover" />
                            <h2 className="text-lg text-black capitalize font-semibold py-1 text-center">Las Vegas Aviators</h2>
                        </div>
                        <div className='space-y-1'>
                            <p className="text-sm text-center text-black">Oct 15 |Sun| 4:30 PM</p>
                            <p className='opacity-60 text-center'>Las Vegas Ballpark, Las Vegas,</p>
                            <p className='opacity-60 text-center pb-8'>Nevada</p>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className='relative'>
                    <Image src={Background} alt='background' />
                    <div className='absolute bottom-0'>
                        <div className="image flex justify-center items-center flex-col">
                            <Image src={CradImage2} alt="card" className="w-full p-1 h-[450px] mb-12  object-cover" />
                            <h2 className="text-lg text-black capitalize font-semibold py-1 text-center">Sacramento River Cats</h2>
                        </div>
                        <div className='space-y-1'>
                            <p className="text-sm text-center text-black">Oct 15 |Sun| 4:30 PM</p>
                            <p className='opacity-60 text-center'>Las Vegas Ballpark, Las Vegas,</p>
                            <p className='opacity-60 text-center pb-8'>Nevada</p>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className='relative'>
                    <Image src={Background} alt='background' />
                    <div className='absolute bottom-0'>
                        <div className="image flex justify-center items-center flex-col">
                            <Image src={CradImage} alt="card" className="w-full p-1 h-[450px] mb-12  object-cover" />
                            <h2 className="text-lg text-black capitalize font-semibold py-1 text-center">Las Vegas Aviators</h2>
                        </div>
                        <div className='space-y-1'>
                            <p className="text-sm text-center text-black">Oct 15 |Sun| 4:30 PM</p>
                            <p className='opacity-60 text-center'>Las Vegas Ballpark, Las Vegas,</p>
                            <p className='opacity-60 text-center pb-8'>Nevada</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='border-2 h-12 border-[#2C9CF0] w-8 mt-2 md:mt-0'>
                <Image className='ml-3 mt-3' src={icon2} alt='icon' />
            </div>
        </div>
    );
};

export default SeconCardData;
