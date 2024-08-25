import { NextResponse, URLPattern } from "next/server"
import { NextApiRequest, NextApiResponse } from "next";

// Classes
import { ProductWithVariants, ProductWithoutVariants } from "@/classes";

// Data
import { products } from '@/data/testData';
import { error } from "console";



export interface Request extends NextApiRequest {
    // Define the properties of the request object here

    
}

export interface Response extends NextApiResponse {
    // Define the properties of the response object here
}

// GET function with query parameters for pagination
export async function GET(request: Request, res: Response): Promise<NextResponse> {
    const page : number = request.query.page || 1;

    const limit = 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const result = products.slice(startIndex, endIndex);

    if (!result) {
        return NextResponse.json(
            { error }
        );
    }

    if (result.length === 0) {
        return NextResponse.json(
            { error: 'No products found' }
        );
    }

    if (result.length < limit) {
        return NextResponse.json(
            { error: 'No more products found' }
        );
    }

    if (!page) {
        return NextResponse.json(
            { error: 'No page provided' }
        );
    }

    return NextResponse.json(
        { result }
    );
}