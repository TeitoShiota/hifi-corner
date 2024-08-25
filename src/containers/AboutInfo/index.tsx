import Image, { StaticImageData } from "next/image"

export default function AboutInfo({picture, alt, heading2, heading3, text} : {picture: StaticImageData, alt: string, heading2: string, heading3: string, text: string}){ 
    return(
        <>
            <Image src={picture} alt={alt}/>
            <h2 className="aboutHeading2">{heading2}</h2>
            <h3 className="aboutHeading3">{heading3}</h3>
            <p className="aboutText spacing">{text}</p>
        </>
    )
}