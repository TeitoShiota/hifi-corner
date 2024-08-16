import Image from "next/image"
import Link from "next/link"

export default function SoMe({href, svg, alt,} : {href: string, svg: string, alt: string}) {
    return (
        <Link href={`https://${href}`}>
            <Image
                src={svg}
                alt={`Icon of ${alt}`}
            />
        </Link>
    )
}