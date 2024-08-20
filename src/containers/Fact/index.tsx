export default function Fact({heading, text} : {heading: string, text: string}) {
    return (
        <>
            <h3 className="faqHeading">{heading}</h3>
            <p className="faqText spacing">{text}</p>
        </>
    )
}