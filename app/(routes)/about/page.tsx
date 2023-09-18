import AboutPageContent from "./components/about-page";
import getStoreSettings from "@/actions/get-store-settings";

export const metadata = {
    title: "About Us"
  }

const AboutPage = async () => {
    const storeSettings = await getStoreSettings();

    
    return ( 
        <div>
            <AboutPageContent data={storeSettings}/>
        </div>
     );
}
 
export default AboutPage;