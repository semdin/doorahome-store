"use client";
import Image from "next/image";
import { ContactForm } from "./contact-form";
import { Store } from "@/types";
import Link from "next/link";
import { motion } from "framer-motion";

interface ContactContentProps {
    data: Store;
};


export const ContactContent: React.FC<ContactContentProps> = ({
    data,
}) => {
    return (
        <motion.div
        initial={{ opacity: 0, translateY: 50}}
        animate={{ opacity: 1, translateY: 0 }}
        >
            <div className="bg-[url('https://res.cloudinary.com/dmi5bpudp/image/upload/v1694330774/laptop-human_ta6ddo.jpg')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply">
                <div className="px-4 lg:pt-24 pt-8 pb-72 lg:pb-80 mx-auto max-w-screen-sm text-center lg:px-6">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Contact Us</h2>
                    <p className="mb-16 font-light text-gray-400 sm:text-xl">{data.contactUsDescription}</p>
                </div>
            </div>
            <div className="py-16 px-4 mx-auto -mt-96 max-w-screen-xl sm:py-24 lg:px-6">
                <div className="mx-auto mb-16 max-w-screen-md bg-white rounded-lg border border-gray-200 shadow-sm lg:mb-28 dark:bg-gray-200 dark:border-gray-700">
                    <ContactForm/>
                </div>
                <div className="space-y-8 text-center md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0">
                    <div>
                        <div className="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16">
                            <svg className="w-5 h-5 text-gray-600 lg:w-8 lg:h-8 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                        </div>
                        <p className="mb-2 text-xl font-bold dark:text-white">Email us:</p>
                        <p className="mb-3 text-gray-500 dark:text-gray-400">{data.contactUsCard1Descrition}</p>
                        <a href={`mailto:${data.contactUsCard1Email}`} className="font-semibold text-primary-600 dark:text-primary-500 hover:underline">{data.contactUsCard1Email}</a>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16">
                            <svg className="w-5 h-5 text-gray-600 lg:w-8 lg:h-8 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                        </div>
                        <p className="mb-2 text-xl font-bold dark:text-white">Call us:</p>
                        <p className="mb-3 text-gray-500 dark:text-gray-400">{data.contactUsCard2Descrition}</p>
                        <a href={`tel:${data.contactUsCard2Phone}`} className="font-semibold text-primary-600 dark:text-primary-500 hover:underline">{data.contactUsCard2Phone}</a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactContent;