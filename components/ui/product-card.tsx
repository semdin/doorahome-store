"use client";

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "@/components/ui/icon-button"
import Currency from "@/components/ui/currency"
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProductCard {
    data: Product;
}

const ProductCard: React.FC<ProductCard> = ({
    data
}) => {
    const cart = useCart();
    const previewModal = usePreviewModal();
    const router = useRouter();
    const handleClick = () => {
        router.push(`/product/${data?.id}`)
    }

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        
        event.stopPropagation();

        previewModal.onOpen(data);
    }

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        
        event.stopPropagation();

        cart.addItem(data);
    }


        
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };

    return (
        <div
            onClick={handleClick} 
            className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 border-none hover:shadow-lg hover:border-dashed hover:duration-300 transition-all duration-300 duration"
         >

            <motion.div
                variants={item}
            >
            {/* Images and Actions*/}

            <div
                className="aspect-square rounded-xl bg-gray-100 relative"
            
            >
                <Image
                    src={data?.images?.[0]?.url}
                    fill
                    alt="Image"
                    className="aspect-square object-cover rounded-md"
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x6 justify-center">
                        <IconButton 
                            onClick={onPreview}
                            icon = {<Expand size={20} className="text-gray-600" />}
                        />
                        <IconButton 
                            onClick={onAddToCart}
                            icon = {<ShoppingCart size={20} className="text-gray-600" />}
                        />

                    </div>
                </div>
            </div>
            <Link href={`/product/${data?.id}`}>
            {/* Description */}
            <hr className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
            <div>
                <p className="font-semibold text-lg">
                    {data.name}
                </p>
                <p className="text-sm text-gray-500">
                    {data.category?.name}
                </p>
            </div>
            {/* Price */}
            <div className="flex items-center justify-between">
                <Currency value={data?.price} />

            </div>
            </Link>
            </motion.div>
        </div>
     );
}
 
export default ProductCard;