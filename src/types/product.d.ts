import { ProductWithVariants, ProductWithoutVariants } from "@/classes";

export type Product = (ProductWithVariants | ProductWithoutVariants);

export type ProductsList = Product[] | [];

