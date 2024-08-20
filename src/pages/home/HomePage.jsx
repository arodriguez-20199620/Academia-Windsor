import useDocumentTitle from "../../hooks/useDocumentTitle"
import { MainSection, LanguagesOfferedSection, HeroSection, LanguagePromoSection } from "./components"

const HomePage = () => {
    useDocumentTitle('Academia Windsor | Inicio')
    return (
        <>
            <MainSection />
            <LanguagesOfferedSection />
            <HeroSection />
            <LanguagePromoSection />
        </>
    )
}

export default HomePage
