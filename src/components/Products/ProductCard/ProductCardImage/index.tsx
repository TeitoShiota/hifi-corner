'use client'

import Image from 'next/image'

export default function ProductCardImage({ images }: { images: string }) {
    return (
        <div className="product-card__image">
            <Image
                src={images}
                alt="Product image"
                width={300}
                height={300}
            />
        </div>
    )
}