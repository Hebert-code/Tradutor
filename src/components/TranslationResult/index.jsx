

const TranslationResult = ({isLoading, translatedText}) => {
    return(
        <div className="p-4 relative bg-secondaryBackground border-l border-gray-200">
            {isLoading ?(
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-600"></div>
            </div>
            )   
            :(
            <p className="text-lg text-textColor">{translatedText}</p>
            )
            }
        </div>
    )
}

export default TranslationResult