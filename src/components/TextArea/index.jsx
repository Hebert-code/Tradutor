
const TextArea = ({sourceText, setSourceText}) => {
    return(
        <div className="p-4">
            <textarea
            value={sourceText}
            onChange={event => setSourceText(event.target.value)}
            placeholder="Digite seu texto..."
            className="w-full h-40 text-lg text-textColor bg-transparent resize-none border-none outline-none">

            </textarea>
        </div>
    )
}

export default TextArea