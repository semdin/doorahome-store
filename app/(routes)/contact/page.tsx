import { Heading } from "@/components/ui/heading";
import { ContactForm } from "./components/contact-form";
import ContactContent from "./components/contact-content";

export const metadata = {
    title: "Contact Us!"
  }

const ContactPage = () => {

    
    return ( 
        <div>
            <Heading title="Contact Us!"/>
            <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex items-center justify-center">
            <ContactContent/>
            </div>
            <ContactForm/>
            </div>
        </div>
     );
}
 
export default ContactPage;