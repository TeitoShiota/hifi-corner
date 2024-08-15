import { NextResponse } from "next/server"

// Classes
import { ProductWithVariants, ProductWithoutVariants } from "@/classes";

// Data
import { products } from './testData';



export interface Request {
    // Define the properties of the request object here
}

export interface Response {
    // Define the properties of the response object here
}



export async function GET(request: Request, res: Response): Promise<NextResponse> {
    return NextResponse.json(
        { products }
    );
}