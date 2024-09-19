// Data
import { products } from '@/data/testData';
import { NextResponse, NextRequest } from "next/server";

import { ProductsList, Product } from '@/types/product';




export async function GET(request: NextRequest, response: NextResponse): Promise<NextResponse> {
    // Get the query parameters from the request object
    const productId = request.nextUrl.searchParams.get('productId') as string || '';

    if (productId === null) {
        return NextResponse.json({ statusCode: 400, statusText: 'Please provide a valid product ID' }, { status: 400 });
    }


    try {
        const product = await getProduct(productId);

        if (product === null) {
            return NextResponse.json({ statusCode: 404, statusText: `Product not found` }, { status: 404 });
        }
        return NextResponse.json({ product }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ statusCode: 500, statusText: 'Internal server error' }, { status: 500 });
    }
}


async function getProduct(productId: string): Promise<Product | null> {
    const product : Product | undefined = products.find(product => product.id === productId);
    if (!product) {
        return null;
    }
    return product;
}