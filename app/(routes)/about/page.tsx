import getAbout from "@/actions/get-about";
import AboutPageContent from "./components/about-page";

export const metadata = {
    title: "About Us"
  }

const AboutPage = async () => {
    //const about = await getAbout();

    
    return ( 
        <div>
            <AboutPageContent/>
        </div>
     );
}
 
export default AboutPage;