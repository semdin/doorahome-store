import Link from "next/link";

import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import MainNav from "@/components/main-nav";
import MainNavMobile from "@/components/main-nav-mobile";
import getCategories from "@/actions/get-categories";
import { auth } from "@clerk/nextjs";
import StaticCategory from "@/components/static-category";
import getStoreSettings from "@/actions/get-store-settings";
import { Separator } from "./ui/separator";

const Navbar = async () => {
    const {userId} = auth();

    const categories = await getCategories();
    const storeSettings = await getStoreSettings();
    return ( 
            <div className="bg-black opacity-90 backdrop-blur-md shadow-md sticky top-0 z-10 h-max max-w-full rounded-none px-4 pt-2 lg:px-8 lg:pb-4 text-white">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                    <p className="font-bold text-xl">{storeSettings.name}</p>
                </Link>
                    <div className="hidden lg:grid place-items-center">
                            <MainNav data={categories}/>
                    </div>
                    <div className="hidden lg:flex flex-grow justify-end ml-64"> {/* Sağa hizalama için */}
                        <StaticCategory userId={userId}/>
                    </div>
                    <div className="flex flex-grow justify-end"> {/* Sağa hizalama için */}
                        <NavbarActions/>
                    </div>
                    <div className="lg:hidden flex flex-grow justify-end">
                        <MainNavMobile data={categories} userId={userId} store={storeSettings}/>
                    </div>
                </div>
                    {/*bg-[#497174] p-1 opacity-70*/}

            </Container>
            </div>

     );
}
 
export default Navbar;