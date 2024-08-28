import { getProductStock } from '@/lib/productsListLib';

interface ProductCardStockInfo {
    total: number;
    availability: {
        available: boolean;
        message: string;

    }
}

// type map for the ProductCardStockInfo icon
const stockIconMap = {
    available: {
        color: 'green',
        message: 'In stock'
    },
    limited: {
        color: 'orange',
        message: 'Limited stock'
    },
    unavailable: {
        color: 'red',
        message: 'Out of stock'
    }
}

export default function ProductCardStockInfo({ productStockInfo }: { productStockInfo: ProductCardStockInfo }) {

    function getStockIcon() {
        if (productStockInfo.total === 0) {
            return stockIconMap.unavailable;
        } else if (productStockInfo.total < 5) {
            return stockIconMap.limited;
        } else {
            return stockIconMap.available;
        }
    }
    
    const stockIcon = getStockIcon();

    return (
        <div className='product-card__stock'>
            <p>{
                stockIcon.message
            }</p>
            <svg width={'2rem'} height={'2rem'}>
                <circle cx="12" cy="12" r="12" fill={stockIcon.color} />
            </svg>
        </div>
    )
}