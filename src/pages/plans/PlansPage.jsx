import { CorporateClassesSection, PrivateClassesSection } from "./components";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const PlansPage = () => {
  useDocumentTitle('Academia Windsor | Planes')
  return (
    <div>
      <>
        <CorporateClassesSection />
        <PrivateClassesSection />
      </>
    </div>
  );
};

export default PlansPage;
