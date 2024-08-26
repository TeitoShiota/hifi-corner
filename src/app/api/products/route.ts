// Data
import { products } from '@/data/testData';
import { NextResponse, NextRequest } from "next/server";


export interface Request extends NextRequest {
    // Define the properties of the request object here    
}

export interface Response extends NextResponse {
    // Define the properties of the response object here
}

export async function GET(request: Request, response: Response): Promise<NextResponse> {
    // Get the query parameters from the request object
    const pageIndex = parseInt(request.nextUrl.searchParams.get('pageIndex') as string) || 1;
    const pageSize = parseInt(request.nextUrl.searchParams.get('pageSize') as string) || 9;

    if (isNaN(pageIndex) || pageIndex < 1) {
        return NextResponse.json({ statusCode: 400, statusText: 'Please provide a valid page number' }, { status: 400 });
    }

    if (isNaN(pageSize) || pageSize < 1) {
        return NextResponse.json({ statusCode: 400, statusText: 'Please provide a valid page size' }, { status: 400 });
    }

    try {
        // Get the paginated products
        const paginatedProducts = products.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);
        
        if (paginatedProducts.length === 0) {
            return NextResponse.json({ statusCode: 404, statusText: 'No products found' }, { status: 404 });
        }
        return NextResponse.json({
            products: paginatedProducts,
            pageIndex,
            pageSize,
            totalProducts: products.length,
            totalPages: Math.ceil(products.length / pageSize)
        });
    } catch (error) {
        return NextResponse.json({ statusCode: 500, statusText: 'Internal server error' }, { status: 500 });
    }
}