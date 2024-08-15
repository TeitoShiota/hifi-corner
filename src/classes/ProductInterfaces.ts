// src/classes/ProductInterfaces.ts
export interface IColorVariant {
    id: string;
    name: string;
    hex: string;
    price: number;
    stock: number;
    suffix: string;
}

export interface IBaseProduct {
    id: string;
    name: string;
    description: string;
    category: string;
}

export interface IProductWithVariants extends IBaseProduct {
    colorVariants: IColorVariant[];
    generateColorVariantId(colorVariant: IColorVariant): string;
}

export interface IProductWithoutVariants extends IBaseProduct {
    images: string[] | string | null;
    price: number;
    stock: number;
}