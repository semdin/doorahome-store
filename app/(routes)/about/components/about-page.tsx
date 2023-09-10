"use client";
import React from 'react';
import { About as AboutType, Store } from '@/types';

import { Mail } from "lucide-react"
 
import {Button}  from "@/components/ui/shadcn-button"
import Link from 'next/link';
import Image from 'next/image';

interface AboutPageContentProps {
data: Store;
}

const AboutPageContent: React.FC<AboutPageContentProps> = ({
    data,
}) => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">{data.aboutUsDescription}</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <Image
                        width={1920}
                        height={1080}
                        className="w-full h-full" 
                        src={`${data.aboutUsPhotoUrl}`}
                        alt="A group of People" 
                     />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our Story</h1>
                    <p className=" font-normal text-base leading-6 text-gray-600 ">{data.aboutUsDescription}</p>
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