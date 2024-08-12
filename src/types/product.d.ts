type Product = {
    colourVariants?: [{
        id: number; // Unique ID for each colour variant
        name: string;
        hex: string;
        price?: number; // Optional price field for colour variants
        stock?: number;
    }];
    id: number;
    name: string;
    price: number;
    description: string;
    images: [string] | string | null;
    category: string;
    stock: number;
} & {
    price: {
        minimum: 0;
    };
    stock: {
        minimum: 0;
    };
};