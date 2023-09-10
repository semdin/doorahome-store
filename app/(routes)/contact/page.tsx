import { Heading } from "@/components/ui/heading";
import { ContactForm } from "./components/contact-form";
import ContactContent from "./components/contact-content";
import getStoreSettings from "@/actions/get-store-settings";

export const metadata = {
    title: "Contact Us!"
  }

const ContactPage = async () => {
    const storeSettings = await getStoreSettings();
    
    return ( 
        <div>
            <ContactContent data={storeSettings}/>
        </div>
     );
}
 
export default ContactPage;