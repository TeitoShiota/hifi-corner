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
    const pageSize = parseInt(request.nextUrl.searchParams.get('pageSize') as string) || 4;

    // Check if the page index is valid
    if (isNaN(pageIndex) || pageIndex < 1) {
        return NextResponse.json({ statusCode: 400, statusText: 'Please provide a valid page number' }, { status: 400 });
    }

    // Check if the page size is valid
    if (isNaN(pageSize) || pageSize < 1) {
        return NextResponse.json({ statusCode: 400, statusText: 'Please provide a valid page size' }, { status: 400 });
    }

    try {
        // Filter the popular products
        const popularProducts = products.filter(product => product.popular === true);

        // Sort the popular products
        const sortedProducts = popularProducts.sort((a, b) => {
            if (a.popularity && b.popularity) {
                return b.popularity - a.popularity;
            }
            return 0;
        });

        // Get the paginated products
        const paginatedProducts = sortedProducts.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);
        
        // Check if there are any products
        if (paginatedProducts.length === 0) {
            return NextResponse.json({ statusCode: 404, statusText: 'No products found' }, { status: 404 });
        }
        // Return the paginated products
        return NextResponse.json({
            products: paginatedProducts,
            pageIndex,
            pageSize,
            totalProducts: popularProducts.length,
            totalPages: Math.ceil(popularProducts.length / pageSize)
        });
    } catch (error) {
        // Return an internal server error response
        return NextResponse.json({ statusCode: 500, statusText: 'Internal server error' }, { status: 500 });
    }
}