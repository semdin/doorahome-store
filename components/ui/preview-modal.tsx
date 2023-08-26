"use client";

import usePreviewModal from "@/hooks/use-preview-modal";
import Modal from "@/components/ui/modal";
import Gallery from "@/components/gallery";
import Info from "@/components/ui/info";

const PreviewModal = () => {
    const PreviewModal = usePreviewModal();
    const product = usePreviewModal((state)=> state.data);

    if(!product){
        return null;
    }

    return ( 
        <div>
            <Modal
                open={PreviewModal.isOpen}
                onClose={PreviewModal.onClose}
            >
                <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 ssm:grid-cols-12 lg:gap-x-8"> {/* Not: md (orta boyut için de düzenleme gerekebilir. Bunun aynısı individual product preview resimleri için de geçerli) */}
                    <div className="sm:col-span-4 lg:col-span-5">
                        <Gallery images={product.images}/>
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                        <Info data={product}/>
                    </div>
                </div>
            </Modal>
        </div>
     );
}
 
export default PreviewModal;