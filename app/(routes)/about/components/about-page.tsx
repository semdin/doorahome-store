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
        <div className='font-poppins  bg-stone-100 dark:bg-gray-800'>
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <div className="pl-4 mb-6 border-l-4 border-blue-500 ">
                            <span className="text-sm text-gray-600 uppercase dark:text-gray-400">Who we are?</span>
                            <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                                About Us
                            </h1>
                    </div>
                    <p className="mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
                        {data.aboutUsDescription}
                    </p>
                </div>
                
                <div className="w-full lg:w-1/2 ">
                    <Image
                        width={1920}
                        height={1080}
                        className="h-auto max-w-xl rounded-lg shadow-xl dark:shadow-gray-800 relative  transition-all duration-300 filter grayscale-0 hover:grayscale" 
                        src={`${data.aboutUsPhotoUrl}`}
                        alt="A group of People" 
                     />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <div className="pl-4 mb-6 border-l-4 border-blue-500 ">
                            <span className="text-sm text-gray-600 uppercase dark:text-gray-400">Who we are?</span>
                            <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                                Our Story
                            </h1>
                    </div>
                    <p className="mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
                        {data.aboutUsOurStory}
                    </p>
                </div>
                <div className="w-full lg:w-1/2 lg:pt-8">
                    <div className="p-4 pb-6 flex justify-center flex-col items-center">
                        <Button className='w-3/4'>
                            <Mail className="h-4 w-4 flex justify-center items-center" />  
                            <Link href={`/contact`} className=' w-full'>
                                Contact Us!
                            </Link> 
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AboutPageContent;