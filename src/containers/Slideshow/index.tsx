import Image from 'next/image';
import { useState } from 'react';

import './slideshow.scss';

export default function Slideshow( {images}: {images: string[] }) {
    const [slideIndex, setSlideIndex] = useState(1); //usestate hook to manage slideIndex state

    // Next/previous controls
    const plusSlides = (n: number) => {
        setSlideIndex((prevIndex) => {
            const newIndex = prevIndex + n;
            return newIndex > images.length ? 1 : newIndex < 1 ? images.length : newIndex;
        });
    };
    
    // Thumbnail image controls
    const currentSlide = (n: number) => {
        setSlideIndex(n);
    };
    
    // Render slides
    const renderSlides = () => {
        return images.map((image, index) => ( //We're using the map function to render slides and dots.
            <div
                key={index}
                className={`slides fade ${index === slideIndex - 1 ? 'active' : ''}`} //We're using template literals to conditionally apply the active class to slides and dots. (Added slides to the div that wraps each image.)   
            >
                <Image 
                    src={image} 
                    alt="Product image" 
                    width={300} 
                    height={300} 
                />
            </div>
        ));
    };
    
    // Render dots
    const renderDots = () => {
        return images.map((_, index) => (
            <span
                key={index}
                className={`dot ${index === slideIndex - 1 ? 'active' : ''}`}
                onClick={() => currentSlide(index + 1)}
            />
        ));
    };

    if (!images || images.length === 0) return null;

    return (
        <section className='slideshow'>
            <div className="slideshow-container">
                <button className="prev" onClick={() => plusSlides(-1)}>&#10094;</button>
                {renderSlides()}
                <button className="next" onClick={() => plusSlides(1)}>&#10095;</button>
            </div>
            <div className="dots-container">
                {renderDots()}
            </div>
        </section>
    );
}