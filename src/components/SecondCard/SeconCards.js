import SeconCardData from "./SeconCardData";


const SeconCards = ({ toggleDarkMode, darkMode }) => {
    return (
        <div >

          {
            darkMode ?
                    <div className="lg:h-[900px]">
                        <div className={`bg-${darkMode ? 'black' : 'white'} bg-cover bg-no-repeat mb-16`} style={{ backgroundImage: `url(${darkMode ? "https://i.ibb.co/x1NJBkx/Rectangle-106.png" : "https://i.ibb.co/Ct3K6c6/Rectangle-105.png"})` }}>
                            <div className="text-center pt-5 mb-7">
                                <h1 className={`text-4xl  lg:text-5xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>Collection Spotlight</h1>
                                <p className={`text-sm lg:text-base ${darkMode ? 'text-white' : 'text-black'}`}>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
                            </div>
                            <SeconCardData toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
                        </div>
                    </div>
                    :

                    <div className="lg:h-[900px]">
                        <div className={`bg-${darkMode ? 'black' : 'white'} bg-cover bg-no-repeat mb-16`} style={{ backgroundImage: `url(${darkMode ? "https://i.ibb.co/x1NJBkx/Rectangle-106.png" : "https://i.ibb.co/Ct3K6c6/Rectangle-105.png"})` }}>
                            <div className="text-center pt-5 mb-7">
                                <h1 className={`text-4xl lg:text-5xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>Collection Spotlight</h1>
                                <p className={`text-sm lg:text-base ${darkMode ? 'text-white' : 'text-black'}`}>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
                            </div>
                            <SeconCardData toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
                        </div>
                    </div>
          }
            
        </div>
    );
};

export default SeconCards;