

const LanguageSelector = ({languages, value, onChange}) => {
    return(    
        <select
            className="text-sm text-textColor bg-transparent border-none focus:outline-none cursor-pointer"
            value={value}
            onChange={ onChange}
        >
            {
            languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                {lang.name}
                </option>
            ))
            }
        </select>
    )
}

export default LanguageSelector