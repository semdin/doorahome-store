"use client";

import { ShoppingBag } from "lucide-react";

import Button from "@/components/ui/button";
import { useState, useEffect } from "react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

interface NavbarActionsProps {
}

const NavbarActions: React.FC<NavbarActionsProps> = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const router = useRouter();
    const cart = useCart();

    if (!isMounted){
        return null;
    }


    return ( 
        <div className="flex justify-center items-center">
            <Button onClick={() => router.push("/cart")} className="flex items-center rounded-full bg-[#161616] px-4 py-2">
                <ShoppingBag
                    size={20}
                    color="white" />
                <span className="ml-2 text-sm font-medium text-white">
                    {cart.items.length}
                </span>
            </Button>

            <UserButton afterSignOutUrl="/" />


        </div>
     );
}
 
export default NavbarActions;