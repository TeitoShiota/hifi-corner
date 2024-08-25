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



export async function GET(request: Request, res: Response): Promise<NextResponse> {

    if (!products) {
        return NextResponse.json(
            { error }
        );
    }

    return NextResponse.json(
        { products }
    );
}