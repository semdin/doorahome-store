interface ContactContentProps {

};

export const ContactContent: React.FC<ContactContentProps> = ({

}) => {
    return (
        <div className="flex flex-col max-w-lg sm:my-5 items-center bg-white border border-gray-200 rounded-lg shadow md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-4/5 rounded-t-lg h-4/5 md:h-4/6 md:w-4/6 md:rounded-none md:rounded-l-lg" src="https://res.cloudinary.com/dmi5bpudp/image/upload/v1694292249/Contact-ISO-9001-Salt-Lake-City-UT-ISO-PROS-49_r6fmsf.jpg" alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        </div>
    )

};

export default ContactContent;