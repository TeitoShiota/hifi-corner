import Image from 'next/image';
import Filter from '@/assets/icons/filter.svg';

import { useCompareListContext } from '@/contexts/CompareListContext/CompareListContext';

import './compare-button.scss';

export default function CompareButton({text = 'Compare', productID}: {text?: string, productID: string}) {

    const { addToCompareList, removeFromCompareList, compareList } = useCompareListContext();
    const isInCompareList = compareList?.includes(productID);

    const handleClick = () => {
        if (isInCompareList) {
            removeFromCompareList(productID);
        } else {
            addToCompareList(productID);
        }
    };

    // const Icon = isInCompareList ? Filter : Filter;

    return (
        <button
            className="filter-btn"
            onClick={handleClick}
        >
            {text}
            <Image
                src={Filter}
                alt="filter icon"
                className="filter"
            />
        </button>
    )
}