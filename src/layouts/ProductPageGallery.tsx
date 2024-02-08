import { ProductGalleryProps } from "@/types/productPage";
import { motion } from "framer-motion";
import { useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

const ProductPageGallery = (props:ProductGalleryProps) => {

    const { productImages } = props
    const [previewImage, setPreviewImage] = useState<number>(0)

  return (
    <div className="flex gap-4 items-start">
        <div className="flex gap-2 flex-col items-start" id='gallery-indics'>
            {
                productImages.map((image, index) => 
                    <button
                        key={image}
                        onMouseEnter={() => setPreviewImage(index)}
                        className="bg-white relative flex items-center justify-center w-14 h-10 border border-zinc-200 rounded-sm p-1"
                        aria-label="show relative image"
                        role='button'
                    >
                        {
                            index===previewImage
                            && <motion.div
                                className="absolute inset-0 border-2 border-zinc-400 shadow-sm pointer-events-none z-10"
                                layoutId={'gallery-indics'}
                                />
                        }
                        <img 
                            className="align-middle max-h-full"
                            src={image}
                            alt='image trigger'
                        />
                        
                    </button>
                )
            }
        </div>

        <div
            className='relative rounded-md h-[420px] flex justify-center p-4 w-full'
        >
            <div className="absolute inset-0 bg-zinc-950 opacity-5 rounded-md pointer-events-none z-10" />
            <InnerImageZoom
                src={productImages[previewImage]}
                className="w-4/5 max-h-full object-contain"
                zoomType="hover"
                fullscreenOnMobile={true}
            />

        </div>
    </div>
  )
}

export default ProductPageGallery