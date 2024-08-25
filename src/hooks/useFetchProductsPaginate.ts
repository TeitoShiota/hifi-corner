import useSWR from 'swr'
import fetcherREST from '@/utils/fetcherREST'

import { ProductsList } from '@/types/product';
import { Suspense } from 'react';


export function useFetchProductsPaginate( page: number ): {
    data: { products: ProductsList } ;
    isLoading: boolean;
    isError: any;
    } {
        const { data, error, isLoading } = useSWR( `/api/products/${page}`, fetcherREST,{
            fallbackData: {
                products: [] as ProductsList
            }
    });

    return {
        data: data,
        isLoading: isLoading,
        isError: error,
    }
}