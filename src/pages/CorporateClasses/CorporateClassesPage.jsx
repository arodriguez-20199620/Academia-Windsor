import { HeroSection, ServicesSection, BenefitsSection, ProcessSection, ContactSection, FAQSection } from "./components";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const CorporateClassesPage = () => {
    useDocumentTitle('Academia Windsor | Plan corporativo')
    return (
        <>
            <HeroSection />
            <div className="mx-auto container">
                <ServicesSection />
                <BenefitsSection />
                <ProcessSection />
                <FAQSection />
                <ContactSection />
            </div>

        </>
    );
};

export default CorporateClassesPage;
