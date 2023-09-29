"use client";
import { Product } from "@/types";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import { motion } from "framer-motion";

interface ProductListProps {
    title: string;
    items: Product[]
}
const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };


const ProductList: React.FC<ProductListProps> = ({
    title,
    items
}) => {
    return ( 
        <div className="space-y-4">
            <h3 className="font-bold text-3xl flex justify-center items-center">{title}</h3>
            {items.length === 0 && <NoResults/>}
            <motion.div 
            initial="hidden"
            animate="visible"
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
                {items.map((item)=> (
                    <ProductCard key={item.id} data={item}/>
                ))}
            </motion.div>
        </div>

     );
}
 
export default ProductList;