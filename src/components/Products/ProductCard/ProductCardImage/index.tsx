import Image from 'next/image'

export default function ProductCardImage({ images }: { images: string[] | string | null }) {
    return (
        <div className="productCardImage">
            <Image
                src={images}
                alt="Picture of the author"
            />
        </div>
    )
}