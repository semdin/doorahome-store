"use client";
import Image from "next/image";
import { PrivacyPolicy } from "./privacy-policy";
import { Store } from "@/types";
import Link from "next/link";
import { motion } from "framer-motion";




export const PolicyContent = ({

}) => {
    return (
        <motion.div
        initial={{ opacity: 0, translateY: 50}}
        animate={{ opacity: 1, translateY: 0 }}
        >
            <div className="bg-[url('https://res.cloudinary.com/dmi5bpudp/image/upload/v1699182836/scott-graham-5fNmWej4tAA-unsplash_d0h3mg.webp')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply">
                <div className="px-4 lg:pt-24 pt-8 pb-72 lg:pb-80 mx-auto max-w-screen-sm text-center lg:px-6">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Doorahome Privacy Policy</h2>
                    <p className="mb-16 font-light text-gray-400 sm:text-xl"></p>
                </div>
            </div>
            <div className="py-16 px-4 mx-auto -mt-96 max-w-screen-xl sm:py-24 lg:px-6">
                <div className="p-10 mx-auto mb-16 max-w-screen-md bg-white rounded-lg border border-gray-200 shadow-sm lg:mb-28 dark:bg-gray-200 dark:border-gray-700">
                    <PrivacyPolicy/>
                </div>
            </div>
        </motion.div>
    );
};

export default PolicyContent;