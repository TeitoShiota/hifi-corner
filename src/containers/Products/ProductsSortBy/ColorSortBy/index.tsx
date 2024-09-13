import { useState } from 'react';

import '../products-sort-by.scss';

function ColorSorter() {
  const [activeVariants, setActiveVariants] = useState<string[]>([]); // initialize with an empty array
  const [showCheckboxes, setShowCheckboxes] = useState(false); // new state variable to track visibility

    const handleVariantChange = (variant: string) => {
        if (activeVariants.includes(variant)) {
        setActiveVariants(activeVariants.filter((v) => v !== variant));
        } else {
        setActiveVariants([...activeVariants, variant]);
        }
    };

    const handleH3Click = () => {
        setShowCheckboxes(!showCheckboxes); // toggle visibility when h3 is clicked
    };

    return (
        <form action="" className='sortBy-form'>
        <h3 onClick={handleH3Click}>
            Color{' '}
            <span className={`arrow ${showCheckboxes ? 'down' : 'up'}`}>∨</span>
        </h3>
        {showCheckboxes && ( // only render radio buttons if showRadioButtons is true
            <section>
            <div>
                <label htmlFor="black">Black</label>
                <input
                type="checkbox"
                id="black"
                name="color"
                value="black"
                checked={activeVariants.includes('black')}
                onChange={() => handleVariantChange('black')}
                />
            </div>
            <div>
                <label htmlFor="silver">Silver</label>
                <input
                type="checkbox"
                id="silver"
                name="color"
                value="silver"
                checked={activeVariants.includes('silver')}
                onChange={() => handleVariantChange('silver')}
                />
            </div>
            <div>
                <label htmlFor="gold">Gold</label>
                <input
                type="checkbox"
                id="gold"
                name="color"
                value="gold"
                checked={activeVariants.includes('gold')}
                onChange={() => handleVariantChange('gold')}
                />
            </div>
            </section>
        )}
        </form>
    );
}

export default ColorSorter;