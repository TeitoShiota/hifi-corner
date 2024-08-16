import { Product, ColorVariant } from '@/types/product';
import { availableMemory } from 'process';

// Type guards
function isProductWithVariants(product: Product): product is Product & { colorVariants: ColorVariant[] } {
    return (product as any).colorVariants !== undefined;
}

export function getProductImage(product: Product) {
    if (isProductWithVariants(product)) {

        return product.colorVariants[0].images;
    }
    return product.images;
}

export function getProductPrice(product: Product) {
    if (isProductWithVariants(product)) {

        return product.colorVariants[0].price;
    }
    return product.price;
}

export function getProductStock(product: Product) {
    if (isProductWithVariants(product)) {
        const stock = {
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