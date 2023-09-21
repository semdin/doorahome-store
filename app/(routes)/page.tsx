import getBillboard from "@/actions/get-billboard";
import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import getStoreSettings from "@/actions/get-store-settings";
import Billboard from "@/components/billboard";
import Carousel from "@/components/carousel";
import HomepageCards from "@/components/homepage-cards";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container"


const HomePage = async () => {
    const products = await getProducts({isFeatured:true});
    const billboard = await getBillboard("6ddeb0e8-341d-4f46-88f1-bdc0a5c0c3ba");
    const billboards = await getBillboards();
    const storeSettings = await getStoreSettings();

    return (
        <Container>
            <Carousel data={billboards} />
            <div className="space-y-10 pb-10">
                {/*<Billboard data={billboard}/>*/}
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products}/>
                </div>
            </div>
            <div className="space-y-10 pb-10">
                {/*<Billboard data={billboard}/>*/}
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <HomepageCards items={storeSettings}/>
                </div>
            </div>
        </Container>
    );
}

export default HomePage;