'use client';

import ColorSorter from "./ColorSortBy";

export default function ProductsSortBy(){

    return(
        // <select>
        //       <option value="someOption">Some option</option>
        //       <option value="otherOption">Other option</option>
        // </select>
        <>
            <h2>Sort by</h2>
                <form action="">
                    <h3>Brand</h3>
                    <div>
                        <label>Steelseries</label>
                        <input type="radio" className='inputField'/>
                    </div>
                    <div>
                        <label>Steelseries</label>
                        <input type="radio" className='inputField'/>
                    </div>
                    <div>
                        <label>Steelseries</label>
                        <input type="radio" className='inputField'/>
                    </div>
                </form>
                


                <ColorSorter/>
                



                <form action="">
                    <h3>Brand</h3>
                    <div>
                        <label>Steelseries</label>
                        <input type="radio" className='inputField'/>
                    </div>
                    <div>
                        <label>Steelseries</label>
                        <input type="radio" className='inputField'/>
                    </div>
                    <div>
                        <label>Steelseries</label>
                        <input type="radio" className='inputField'/>
                    </div>
                </form>
        </>
    )
}