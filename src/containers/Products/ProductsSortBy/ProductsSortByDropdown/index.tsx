import ProductsSortByListItem from "@/components/Products/ProductsSortByList/ProductsSortByListItem";

export default function ProductsSortByDropdown({
    title = '',
    options = [],

}:{
    title?: string,
    options: string[],
}
) {
    return (
        <section>
            <h3>{title}</h3>
            
            {options.map((option, index) => (
                <ProductsSortByListItem
                    key={index}
                    index={index.toString()}
                    labelText={option}
                    htmlFor={option}
                />
            ))}
        </section>
    )
}