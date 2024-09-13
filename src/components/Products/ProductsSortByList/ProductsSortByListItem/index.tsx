export default function ProductsSortByListItem({ index, labelText, htmlFor } : { index: string, labelText: string, htmlFor: string}) {
    return (
        <div key={index}>
            <label htmlFor={htmlFor}>{labelText}</label>
            <input type="radio" className='inputField'/>
        </div>
    )
}