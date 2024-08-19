export default function Fact({heading, text} : {heading: string, text: string}) {
    return (
        <>
            <h3>{heading}</h3>
            <p className="spacing">{text}</p>
        </>
    )
}