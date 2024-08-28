import { Product, ColorVariant } from '@/types/product';

// Type guards
/**
 * 
 * @param product 
 * @returns True if the product has colorVariants
 * 
 */
function isProductWithVariants(product: Product): product is Product & { colorVariants: ColorVariant[] } {
    return (product as any).colorVariants !== undefined;
}

/**
 * Returns the first image of the product or the first image of the first variant
 * 
 * @param product 
 * @returns  The first image of the product or the first image of the first variant
 * 
 * @example
 * const product = {
 * images: ['image1', 'image2'],
 * colorVariants: [
 * {
 * images: ['image3', 'image4']
 * }]}
 * 
 */
export function getProductImage(product: Product) {
    if (isProductWithVariants(product)) {

        return product.colorVariants[0].images;
    }
    return product.images;
}


/**
 * Returns the first price of the product or the first price of the first variant
 * 
 * @param product 
 * @returns  The first price of the product or the first price of the first variant
 * 
 * @example
 * const product = {
 * price: 100,
 * colorVariants: [
 * {
 * price: 200
 * }]}
 * 
 */
export function getProductPrice(product: Product) {
    if (isProductWithVariants(product)) {

        return product.colorVariants[0].price;
    }
    return product.price;
}

export function getProductStock(product: Product) {
    if (isProductWithVariants(product)) {
        const stockInfo = {
            total: product.colorVariants.reduce((acc, variant) => acc + variant.stock, 0),
            availability: {
                available: product.colorVariants.some(variant => variant.stock > 0),
                low: product.colorVariants.some(variant => variant.stock < 5),
                outOfStock: product.colorVariants.every(variant => variant.stock === 0)
            }
        };

        return product.colorVariants[0].stock;
    }
    return product.stock;
}