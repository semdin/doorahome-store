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
                className={cn("text-sm font-medium transition-colors text-gray-600 hover:text-black pr-2")}
                href="/contact">Contact
            </Link>
            <Link
                className={cn("text-sm font-medium transition-colors text-gray-600 hover:text-black")}
                href="/about">About
            </Link>
            {userId ? (
                <></>
            ) : (
                <>
                    <Link
                        className={cn("text-sm font-medium transition-colors text-gray-600 hover:text-black")}
                        href="/sign-in">Sign-in
                    </Link>
                    <Link
                        className={cn("text-sm font-medium transition-colors text-gray-600 hover:text-black")}
                        href="/sign-up">Sign-up
                    </Link>
                </>
            )}

        </div>
     );
}
 
export default StaticCategory;