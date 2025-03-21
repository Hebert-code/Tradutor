import { useEffect } from "react"
import { useState } from "react"
import LanguageSelector from "../LanguageSelector"
import TextArea from "../TextArea"
import TranslationResult from "../TranslationResult"
import InverterButton from "../inverterbutton"
import HeaderP from "../HeaderP"
import FooterP from "../FooterP"


const languages = [
    { code: 'en', name: "Inglês" },
    { code: 'es', name: "Espanhol" },
    { code: 'fr', name: "Francês" },
    { code: 'de', name: "Alemão" },
    { code: 'it', name: "Italiano" },
    { code: 'pt', name: "Português" },
  ]
  

const Translator = () => {
    
    const [sourceLang, setSourceLang] = useState('pt')
    const [targetLang, setTargetLang] = useState('en')
    const [sourceText, setSourceText] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [translatedText, setTranslatedText] = useState('')
  
    useEffect(() => {
  
      if (sourceText) {
        const delay = setTimeout(() => {
          handleTranslate()
        }, 500);
  
        return () => clearTimeout(delay)
      }
  
    }, [sourceText, targetLang, sourceLang])
  
    const handleTranslate = async () => {
      setIsLoading(true)
  
      try {
  
        const response = await fetch(`https://api.mymemory.translated.net/get?q=${sourceText}!&langpair=${sourceLang}|${targetLang}`)
  
        if (!response.ok) {
          throw new Erro(`HTTP ERRO: ${response.status}`)
        }
  
        const data = await response.json()
  
        setTranslatedText(data.responseData.translatedText)
      
      } catch (err) {

        console.log(`Erro ao tentar traduzir: ${err.message}. Tente novamente`)
      
      } finally {
      
        setIsLoading(false)
      
      }
  
    }
  
    const swapTranslate = () => {
      
      setSourceLang(targetLang)
      setTargetLang(sourceLang)
      setSourceText(translatedText)
      setTranslatedText(sourceText)
    
    }



    return(
        <div className="min-h-screen bg-background1 flex flex-col">
            <HeaderP/>
            <main className="flex flex-grow items-start justify-center px-4 py-8">
                <div className="w-full max-w-5xl bg-white rounded-lg shadow-md overflow-hidden">
                    <div className ="flex items-center justify-between p-4 border-b border-gray-200">

                        <LanguageSelector languages = {languages} value = {sourceLang} onChange = {(e) => setSourceLang(e.target.value)}/>

                        <InverterButton onButtonClick = {swapTranslate}/>
                        
                        <LanguageSelector languages = {languages} value={targetLang} onChange = {(e) => setTargetLang(e.target.value)}/>

                    </div>
                
                    <div className="grid grid-cols-1 md:grid-cols-2">

                        <TextArea sourceText = {sourceText} setSourceText = {setSourceText}/>

                        <TranslationResult isLoading = {isLoading} translatedText = {translatedText}/>
                    </div>
                </div>
            </main>
            <FooterP/>
        </div>
    )
}

export default Translator