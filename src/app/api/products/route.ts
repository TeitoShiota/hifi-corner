import { NextResponse } from "next/server"


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