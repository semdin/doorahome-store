"use client";

import Link from "next/link";
import { cn } from "@/lib/utils"

interface StaticCategoryProps {
    userId: string | null;
}

const StaticCategory: React.FC<StaticCategoryProps> = ({ userId }) => {

    return (

        <div className="mr-5 flex items-center gap-x-4">
            <Link
                className="transition-all hover:bg-[#497174] hover:bg-opacity-80 hover:text-white block rounded-md px-1 sm:px-3 py-1 text-base font-medium"
                href="/contact">Contact
            </Link>
            <Link
                className="transition-all hover:bg-[#497174] hover:bg-opacity-80 hover:text-white block rounded-md px-1 sm:px-3 py-1 text-base font-medium"
                href="/about">About
            </Link>
            {userId ? (
                <></>
            ) : (
                <>
                    <Link
                className="transition-all hover:bg-[#497174] hover:bg-opacity-80 hover:text-white block rounded-md px-1 sm:px-3 py-1 text-base font-medium "
                        href="/sign-in">Sign-in
                    </Link>
                    <Link
                        className="transition-all hover:bg-[#497174] hover:bg-opacity-80 hover:text-white block rounded-md px-1 sm:px-3 py-1 text-base font-medium"
                        href="/sign-up">Sign-up
                    </Link>
                </>
            )}

        </div>
     );
}
 
export default StaticCategory;