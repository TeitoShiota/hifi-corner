import { getProductStock } from '@/lib/productsListLib';

import '../product-card.scss';

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
             <svg width={'1.25rem'} height={'1.25rem'} viewBox="0 0 24 24"> {/*We use the viewBox attribute to define the coordinate system of the SVG element. in this case we give it a width and height of 24 units, and then using the same cx and cy values as before. This will also center the circle within the SVG. */}
                <circle cx="12" cy="12" r="12" fill={stockIcon.color} />
            </svg>
        </div>
    )
}