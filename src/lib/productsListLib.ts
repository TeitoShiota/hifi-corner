import { Product, ColorVariant } from '@/types/product';

interface ProductCardStockInfo {
    total: number;
    availability: {
        available: boolean;
        message: string;

    }
}

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

/**
 * Returns the stock of the product or the stock of the first variant
 * 
 * @param product 
 * @returns  The stock of the product or the stock of the first variant
 * 
 * @example
 * const product = {
 * stock: 100,
 * colorVariants: [
 * {
 * stock: 200
 * }]}
 * 
 */
export function getProductStock(product: Product) : ProductCardStockInfo {
    return generateProductStockInfo(product);
}

function generateProductStockInfo(product: Product) : ProductCardStockInfo {
    if (isProductWithVariants(product)) {
        const stockInfo = {
            total: product.colorVariants.reduce((acc, variant) => acc + variant.stock, 0),
            availability: {
                available: product.colorVariants.some(variant => variant.stock > 0),
                message: product.colorVariants.some(variant => variant.stock > 0) ? 'In stock' : 'Out of stock'
            }
        } as ProductCardStockInfo;

        return stockInfo;
    }
    return {
        total: product.stock,
        availability: {
            available: product.stock > 0,
            message: product.stock > 0 ? 'In stock' : 'Out of stock'
        }
    } as ProductCardStockInfo;
}