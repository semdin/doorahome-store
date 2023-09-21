import { Product } from "@/types";
import qs from "query-string";

interface Query {
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean;
}

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProducts = async (query: Query): Promise<Product[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            colorId: query.colorId,
            sizeId: query.sizeId,
            isFeatured: query.isFeatured,
        }
    });

    const res = await fetch(url, {cache: "no-store"});

    const products = await res.json();

    if (query.categoryId) {
        const categoryProducts = products.filter((product: { categoryId: string | undefined; }) => product.categoryId === query.categoryId);
        const parentCategoryProducts = products.filter((product: { category: { parentCategoryId: string | undefined; }; }) => product.category.parentCategoryId === query.categoryId);
        return [...categoryProducts, ...parentCategoryProducts];
    }

    return products;
}

export default getProducts;

export const fetchCache = 'force-no-store';