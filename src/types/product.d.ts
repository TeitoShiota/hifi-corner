type Product = {
    colorVariants?: [{
        id: number; // Unique ID for each color variant
        name: string;
        hex: string;
        price?: number; // Optional price field for color variants
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