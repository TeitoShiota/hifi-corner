import { Product } from "@/types/product";

import './detail-variant-selector.scss';

export default function DetailVariantSelectorButton({ 
        color, 
        text, 
        active ,
        onClick 
    }: { 
        color: string, 
        text: string, 
        active?: boolean,
        onClick: () => void 
    }) {

    const classname = `${color}-gradient`

  return (
        <button
            className={`detailVariantSelector__button ${classname}`}
            onClick={onClick}
            data-active={active}
            data-text={text}
        >
        </button>
  )
}