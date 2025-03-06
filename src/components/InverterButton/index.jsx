
const InverterButton = ({onButtonClick}) => {
    return(
        <button 
        onClick={onButtonClick}
        className="p-2 rounded-full hover:bg-gray-100 outline-none">
            <svg
            className="w-5 h-5 text-headerColor"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
            />
            </svg>
        </button>
    )
}

export default InverterButton