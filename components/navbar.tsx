import Link from "next/link";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import MainNav from "@/components/main-nav";
import MainNavMobile from "@/components/main-nav-mobile";
import getCategories from "@/actions/get-categories";
import { auth } from "@clerk/nextjs";

const Navbar = async () => {
  const { userId } = auth();

  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 fex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">doorahome</p>
          </Link>
          {/* Kullanıcı ekran boyutuna göre hangi komponenti göstereceğimizi belirleyin */}
          <div className="lg:hidden">
            <MainNavMobile data={categories} />
          </div>
          <div className="hidden lg:flex">
            <MainNav data={categories} />
          </div>
          <NavbarActions userId={userId} />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
