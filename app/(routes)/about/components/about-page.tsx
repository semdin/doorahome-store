"use client";
import React from 'react';
import { About as AboutType } from '@/types';

import { Mail } from "lucide-react"
 
import {Button}  from "@/components/ui/shadcn-button"
import Link from 'next/link';

interface AboutPageContentProps {

}

const AboutPageContent: React.FC<AboutPageContentProps> = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src="https://res.cloudinary.com/dmi5bpudp/image/upload/v1692733502/samples/imagecon-group.jpg" alt="A group of People" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our Story</h1>
                    <p className=" font-normal text-base leading-6 text-gray-600 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="p-4 pb-6 flex justify-center flex-col items-center">
                        <Button className='w-7/12'>
                            <Mail className="h-4 w-4 flex justify-center items-center" />  
                            <Link href={`/contact`} className=' w-full'>
                                Contact Us!
                            </Link> 
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPageContent;