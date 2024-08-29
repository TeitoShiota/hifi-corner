// src/classes/ProductInterfaces.ts
export interface IColorVariant {
    id: string;
    color: string;
    hex: string;
    images: string[] | string | null;
    price: number;
    stock: number;
}

export interface IBaseProduct {
    id: string;
    name: string;
    description: string;
    category: string;
    popular?: boolean;
    popularity?: number;
}

export interface IProductWithVariants extends IBaseProduct {
    colorVariants: IColorVariant[];
}

export interface IProductWithoutVariants extends IBaseProduct {
    images: string[] | string | null;
    price: number;
    stock: number;
}