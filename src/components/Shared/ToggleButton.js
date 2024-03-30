
const ToggleButton = ({ toggleDarkMode }) => {
    return (
        <div>
            <button className="mt-4 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md" onClick={toggleDarkMode}>
                Toggle dark mode
            </button>
        </div>
    );
};

export default ToggleButton;