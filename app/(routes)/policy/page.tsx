import { Heading } from "@/components/ui/heading";
import { PolicyContent } from "./components/policy-content";
import getStoreSettings from "@/actions/get-store-settings";

export const metadata = {
  title: "Ceraste Privacy Policy, Terms & Conditions",
  description: "Ceraste Privacy Policy, Terms & Conditions",
  slug: "policy",
  type: "website",
  canonical: "https://ceraste.com/policy",
};

const PolicyPage = async () => {
  return (
    <div>
      <PolicyContent />
    </div>
  );
};

export default PolicyPage;
