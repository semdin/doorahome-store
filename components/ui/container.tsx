"use client";
import { motion } from "framer-motion";

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mx-auto max-w-7xl"
    >
            {children}
        </motion.div>
     );
}
 
export default Container;