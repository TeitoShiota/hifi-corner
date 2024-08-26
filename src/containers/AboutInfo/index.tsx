import Image, { StaticImageData } from "next/image"

//in the article tag we use a string lutteral to interpulate the className, it applies the "aboutInfo" class, then the "aboutInfoRight" class if right is true (we declare that in the about - page)
//we add right as an optional parameter and we give right a default value of false, then define as optional (byadding ?) and it's type as a boolean. 
export default function AboutInfo({picture, alt, heading2, heading3, text, right = false} : {picture: StaticImageData, alt: string, heading2: string, heading3: string, text: string, right?: boolean}){ 
    return(
        <article className={`aboutInfo${right ? " aboutInfoRight" : ""}`}>
            <Image src={picture} alt={alt}/>
            <section>
                <h2 className="aboutHeading2">{heading2}</h2>
                <h3 className="aboutHeading3">{heading3}</h3>
                <p className="aboutText spacing">{text}</p>
            </section>
        </article>
    )
}