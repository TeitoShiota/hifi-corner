import './test.scss';

export default function Test() {
    return (
        <>
            {/* Method 1 */}
            <div
                id="popover-1"
                className="popover"
                popover='auto' 
                >
                <h3>Popover</h3>
                <p>This is a popover.</p>
            </div>

            <main >
                {/* Method 1 */}
                <div className='cart'>
                    <button 
                        popoverTarget="popover-1"
                        className='anchor-button-1'
                    >
                        toggle pop-over
                    </button>
                </div>




                {/* Method 2 */}
                <div className='cart'>
                    <button 
                        popoverTarget="popover-2"
                        className='anchor-button-2'
                    >
                        Click
                    </button>

                    <div 
                        id="popover-2"
                        className='cart-content'
                        popover='auto'
                        >
                        <h3>Added to Cart</h3>
                        <p>Product Name</p>
                    </div>
                </div>
            </main>
        </>
    );
}