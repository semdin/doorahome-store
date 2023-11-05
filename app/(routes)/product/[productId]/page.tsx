import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/gallery";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import Info from "@/components/ui/info";

export async function generateMetadata({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  try {
    const product = await getProduct(params.productId);
    if (!product)
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist.",
      };

    return {
      title: `${product.name} | ${product.size.value} | ${product.color.name} | $${product.price} - ${product.category.name}`,
    };
  } catch (error) {
    console.error(error);
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    };
  }
}

interface ProductPageProps {
    params: {
        productId: string;
    }
}

const ProductPage: React.FC<ProductPageProps> = async ({
    params
}) => {
    const product = await getProduct(params.productId);

    const productCategory = product.category.id;

    const suggestedProducts = await getProducts({
        categoryId: product.category.id
    });

    // Diziyi karıştır
    suggestedProducts.sort(() => Math.random() - 0.5);
    
    const filteredProducts = suggestedProducts.filter(product => product.id !== params.productId && productCategory === product.category.id).slice(0, 10);

    return (
        <div className="bg-white">
          <Container>
            <div className="px-4 py-10 sm:px-6 lg:px-8">
              <div className="md:grid md:grid-cols-2 md:items-start md:gap-x-8">
                <Gallery images={product.images} />
                <div className="mt-10 px-4 sm:mt-16 sm:px-0 md:mt-0">
                  <Info data={product} />
                </div>
              </div>
              <hr className="my-10" />
              <ProductList title="Related Items" items={filteredProducts} />
            </div>
          </Container>
        </div>  
      )
    }
 
export default ProductPage;