import { MainSection, LanguagesOfferedSection, HeroSection, LanguagePromoSection } from "./components"
import useDocumentTitle from "../../hooks/useDocumentTitle"

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
