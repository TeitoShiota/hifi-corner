// type ColorVariant = {
//     id: string; // Composite ID combining base product id and color variant id
//     name: string;
//     hex: string;
//     price: number; // Optional price field for color variants
//     stock: number;
//     suffix: string; // Suffix based on the color's name, e.g. "blue" or "red"
// };

// type BaseProduct = {
//     id: string; // Unique ID for the base product
//     name: string;
//     description: string;
//     category: string;
// };

// type ProductWithVariants = BaseProduct & {
//     colorVariants: ColorVariant[];
// };

// type ProductWithoutVariants = BaseProduct & {
//     colorVariants?: never;
//     images: string[] | string | null;
//     price: number;
//     stock: number;
// };

// type Product = ProductWithVariants | ProductWithoutVariants;

// // Example function to generate composite ID for color variants
// function generateColorVariantId(baseProductId: string, colorVariant: ColorVariant): string {
//     return `${baseProductId}-${colorVariant.suffix}`;
// }