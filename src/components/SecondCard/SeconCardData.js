
import Image from 'next/image';
import Icon from '../../../public/IconRight.png'
import image1 from '../../../public/player1.png'
import icon2 from '../../../public/Vector (1).png'
import CradImage from '../../../public/Ticket_Mockup 3.png'
import CradImage2 from '../../../public/unnamed 1.png'
const SeconCardData = () => {
    return (
        <div className='flex justify-around'>
            <div className='border-2 h-12 border-[#2C9CF0] w-8 mt-[200px]'>
                <Image className='ml-2 mt-3' src={Icon} alt='icon' />
            </div>


            {/* card hereee  */}
            <div className='grid lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1'>
                <div className="flex justify-center md:w-auto items-center pt-2 shadow-xl px-2">
                    <div>
                        <div className="image flex items-center flex-col">
                            <Image src={CradImage} alt="card" className="w-full h-[400px] object-cover" />
                            <h2 className="text-lg   text-black capitalize font-semibold py-1 text-center">Las Vegas Aviators</h2>
                        </div>
                       
                            <div className='space-y-1'>
                                <p className="text-sm text-center text-black">Oct 15 |Sun| 4:30 PM</p>
                                <p className='opacity-60 text-center'>Las Vegas Ballpark, Las Vegas,</p>
                                <p className='opacity-60 text-center pb-8'> Nevada</p>
                            </div>
                            
                        
                    </div>
                </div>


                <div className="flex justify-center md:w-auto items-center pt-2 shadow-xl px-2">
                    <div>
                        <div className="image flex items-center flex-col">
                            <Image src={CradImage2} alt="card" className="w-full h-[400px] object-cover" />
                            <h2 className="text-lg   text-black capitalize font-semibold py-1 text-center">Sacramento River Cats</h2>
                        </div>

                        <div className='space-y-1'>
                            <p className="text-sm text-center text-black">Oct 15 |Sun| 4:30 PM</p>
                            <p className='opacity-60 text-center'>Las Vegas Ballpark, Las Vegas,</p>
                            <p className='opacity-60 text-center pb-8'> Nevada</p>
                        </div>


                    </div>
                </div>





                <div className="flex justify-center md:w-auto items-center pt-2 shadow-xl px-2">
                    <div>
                        <div className="image flex items-center flex-col">
                            <Image src={CradImage} alt="card" className="w-full h-[400px] object-cover" />
                            <h2 className="text-lg   text-black capitalize font-semibold py-1 text-center">Las Vegas Aviators</h2>
                        </div>

                        <div className='space-y-1'>
                            <p className="text-sm text-center text-black">Oct 15 |Sun| 4:30 PM</p>
                            <p className='opacity-60 text-center'>Las Vegas Ballpark, Las Vegas,</p>
                            <p className='opacity-60 text-center pb-8'> Nevada</p>
                        </div>


                    </div>
                </div>

               


            </div>

            <div className='border-2 h-12 border-[#2C9CF0] w-8 mt-[200px]'>
                <Image className='ml-3 mt-3' src={icon2} alt='icon' />
            </div>

        </div>
    );
};

export default SeconCardData;