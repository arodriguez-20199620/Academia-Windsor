import { HeroSection, ServicesSection, BenefitsSection, ProcessSection, FAQSection, ContactSection } from "./components"
import useDocumentTitle from '../../hooks/useDocumentTitle'

const PrivateClassesPage = () => {
    useDocumentTitle('Academia Windsor | Plan privado')

    return (
        <>
            <HeroSection />
            <div className="container mx-auto">
                <ServicesSection />
                <BenefitsSection />
                <ProcessSection />
                <FAQSection />
                <ContactSection />
            </div>
        </>
    )
}

export default PrivateClassesPage