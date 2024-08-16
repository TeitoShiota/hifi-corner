import { ProductWithVariants, ProductWithoutVariants, ColorVariants } from "@/classes";

export type Product = (ProductWithVariants | ProductWithoutVariants);

export type ColorVariant = ColorVariants;

export type ProductsList = Product[] | [];

