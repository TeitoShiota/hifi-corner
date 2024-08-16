// src/classes/Product.ts 
import { IColorVariant, IBaseProduct, IProductWithVariants, IProductWithoutVariants } from './ProductInterfaces';

export class ColorVariant implements IColorVariant {
    id: string;
    color: string;
    images: string[] | string | null;
    hex: string;
    price: number;
    stock: number;

    constructor(id: string, color: string, hex: string, price: number, stock: number, images: string[] | string | null) {
        this.id = id;
        this.color = color;
        this.images = images;
        this.hex = hex;
        this.price = price;
        this.stock = stock;
    }
}

class BaseProduct implements IBaseProduct {
    id: string;
    name: string;
    description: string;
    category: string;

    constructor(id: string, name: string, description: string, category: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
    }
}

export class ProductWithVariants extends BaseProduct implements IProductWithVariants {
    colorVariants: ColorVariant[];

    constructor(id: string, name: string, description: string, category: string, colorVariants: ColorVariant[]) {
        super(id, name, description, category);
        this.colorVariants = colorVariants;
    }

}

export class ProductWithoutVariants extends BaseProduct implements IProductWithoutVariants {
    images: string[] | string | null;
    price: number;
    stock: number;

    constructor(id: string, name: string, description: string, category: string, images: string[] | string | null, price: number, stock: number) {
        super(id, name, description, category);
        this.images = images;
        this.price = price;
        this.stock = stock;
    }
}