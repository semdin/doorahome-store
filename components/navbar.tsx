import Link from "next/link";

import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import MainNav from "@/components/main-nav";
import MainNavMobile from "@/components/main-nav-mobile";
import getCategories from "@/actions/get-categories";
import { auth } from "@clerk/nextjs";
import StaticCategory from "@/components/static-category";




//export const revalidate = 0; // it makes never cached.

const Navbar = async () => {
    const {userId} = auth();

    const categories = await getCategories();
    return ( 
            <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                    <p className="font-bold text-xl">doorahome</p>
                </Link>
                <div className="hidden md:block">
                        <MainNav data={categories}/>
                    </div>
                <div className="hidden lg:flex flex-grow justify-end"> {/* Sağa hizalama için */}
                    <StaticCategory userId={userId}/>
                </div>
                <div className="flex flex-grow justify-end"> {/* Sağa hizalama için */}
                    <NavbarActions/>
                </div>
                <div className="lg:hidden flex flex-grow justify-end">
                    <MainNavMobile data={categories} userId={userId}/>
                </div>
                </div>
            </Container>
            </div>

     );
}
 
export default Navbar;