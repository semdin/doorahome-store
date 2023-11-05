import { Product, Store } from "@/types";
import NoResults from "@/components/ui/no-results";
import { CircleDollarSign, GaugeCircle, ShieldCheck, Truck } from "lucide-react";
import { Separator } from "./ui/separator";


interface HomePageCardsProps {
    items: Store;
}


const HomepageCards: React.FC<HomePageCardsProps> = ({
    items,
}) => {
    return (

        <div className="space-y-4">
                    <Separator/>
            <h3 className="font-bold text-3xl flex justify-center items-center">{items.cardName}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center place-items-center text-center">
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 shadow-gray-500/10 h-full">
                <div className="flex justify-center items-center p-3">
                    <Truck color="#7091f5" size={50} absoluteStrokeWidth className="text-gray-500 dark:text-gray" />
                </div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {items.card1Title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {items.card1Description}
                </p>
            </div>
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 shadow-gray-500/10 h-full">
                <div className="flex justify-center items-center p-3">
                    <ShieldCheck color="#bb2525" size={50} absoluteStrokeWidth className="text-gray-500 dark:text-gray" />
                </div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {items.card2Title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {items.card2Description}
                </p>
            </div>
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 shadow-gray-500/10 h-full">
                <div className="flex justify-center items-center p-3">
                    <CircleDollarSign color="#7aa874" size={50} absoluteStrokeWidth className="text-gray-500 dark:text-gray" />
                </div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {items.card3Title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {items.card3Description}
                </p>
            </div>

            </div>
        </div>
     );
}
 
export default HomepageCards;