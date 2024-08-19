import { NextResponse } from "next/server"

// Classes
import { ProductWithVariants, ProductWithoutVariants } from "@/classes";

// Data
import { products } from './testData';



export interface Request {
    // Define the properties of the request object here
    // page: number | undefined;
    
    // limit: number | undefined;
    // search: string | undefined;
    // sort: string | undefined;
    // order: string | undefined;
    // category: string | undefined;
    // color: string | undefined;
    // size: string | undefined;
    // price: string | undefined;
    // stock: string | undefined;
    // discount: string | undefined;
}

export interface Response {
    // Define the properties of the response object here
}



// export async function GET(request: Request, res: Response): Promise<NextResponse> {
//     return NextResponse.json(
//         { products }
//     );
// }

// GET function with query parameters for pagination
export async function GET(request: Request, res: Response): Promise<NextResponse> {
    const page = request.page || 1;
    const limit = 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const result = products.slice(startIndex, endIndex);

    return NextResponse.json(
        { products: result }
    );
}