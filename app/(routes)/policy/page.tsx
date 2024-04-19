import { Heading } from "@/components/ui/heading";
import { PolicyContent } from "./components/policy-content";
import getStoreSettings from "@/actions/get-store-settings";

export const metadata = {
    title: "Doorahome Privacy Policy, Terms & Conditions",
    description: "Doorahome Privacy Policy, Terms & Conditions",
    slug: "policy",
    type: "website",
    canonical: "https://doorahome.com/policy",
  }

const PolicyPage = async () => {
    
    return ( 
        <div>
            <PolicyContent />
        </div>
     );
}
 
export default PolicyPage;