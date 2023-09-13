import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import Filter from "./components/filter";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import MobileFilters from "./components/mobile-filters";
import { Category, Product } from "@/types";

export async function generateMetadata({
    params: { categoryId },
  }: {
    params: {
        categoryId: string;
    };
  }) {
    try {
      const category = await getCategory(categoryId);
      if (!category)
        return {
          title: "Not Found",
          description: "The page you are looking for does not exist.",
        };
      return {
        title: category.name,
        robots: {
          index: true,
          follow: true,
          nocache: true,
        },
      };
    } catch (error) {
      console.error(error);
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist.",
      };
    }
  }


//export const revalidate= 0;

interface CategoryPageProps {
    params:{
        categoryId: string;
    },
    searchParams: {
        colorId: string;
        sizeId: string;
    }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
    params,
    searchParams
}) => {
    const products = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId
    });

    const sizes = await getSizes();
    const colors = await getColors();
    const category = await getCategory(params.categoryId);
    CategoryPage.displayName = category.name;
    return ( 
        <div className="bg-white">
            <Container>
                <Billboard
                    data={category.billboard} 
                />
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        <MobileFilters sizes={sizes} colors={colors} />
                        <div className="hidden lg:block">
                            <Filter 
                                valueKey = "sizeId"
                                name="Sizes"
                                data={sizes}
                            />
                            <Filter 
                                valueKey = "colorId"
                                name="Colors"
                                data={colors}
                            />
                        </div>
                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            {products.length === 0 && <NoResults/>}
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {products.map((item)=>(
                                    <ProductCard 
                                        key={item.id}
                                        data={item}
                                    
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
     );
}

const getCategoryTitle: React.FC<CategoryPageProps> = async ({
    params
}) => {
    const category = await getCategory(params.categoryId);
    return category.name;
  };
 
export default CategoryPage;