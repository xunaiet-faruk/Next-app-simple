import SeconCardData from "./SeconCardData";


const SeconCards = () => {
    return (
        <div >

            <div className='bg-red-300 lg:h-[900px] ' style={{ backgroundImage: `url(${"https://i.ibb.co/Ct3K6c6/Rectangle-105.png"})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <div className='mb-16'>
                    <h1 className='text-[50px] font-bold text-center text-black'>Collection Spotlight</h1>
                    <p className='text-[14px] text-black text-center'>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable</p>
                    <p className='text-center'> experience. Grab yours today!</p>
                </div>
               <SeconCardData/>
            </div>
        </div>
    );
};

export default SeconCards;