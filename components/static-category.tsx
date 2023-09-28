"use client";

import Link from "next/link";
import { cn } from "@/lib/utils"

interface StaticCategoryProps {
    userId: string | null;
}

const StaticCategory: React.FC<StaticCategoryProps> = ({ userId }) => {

    return (

        <div className="flex items-center gap-x-4 mr-5 text-sm lg:text-base">
            <Link
                className="transition-all hover:bg-opacity-80 hover:text-gray-400 block px-1"
                href="/contact">Contact
            </Link>
            <Link
                className="transition-all hover:bg-opacity-80 hover:text-gray-400 block px-1"
                href="/about">About
            </Link>
            {userId ? (
                <></>
            ) : (
                <>
                    <Link
                className="transition-all hover:bg-opacity-80 hover:text-gray-400 block px-1"
                        href="/sign-in">Sign-in
                    </Link>
                    <Link
                        className="transition-all hover:bg-opacity-80 hover:text-gray-400 block px-1"
                        href="/sign-up">Sign-up
                    </Link>
                </>
            )}

        </div>
     );
}
 
export default StaticCategory;