'use client';

import './PrimaryButton.scss';

interface PrimaryButtonProps {
    text: string;
    onClick: () => void;
    className?: string;
    disabled?: boolean;
}

/**
 * @description - Button component with primary styling
 * * Make sure to mark the parent component with 'use client' at the top of the file; to ensure the component is rendered on the client side
 * 
 * @param {string} text - Button text
 * @param {string} className - Additional class names
 * @param {function} onClick - Click event handler
 * @param {boolean} disabled - Button disabled state
 * @returns {JSX.Element} - Button component
 * 
 * @example
 * <PrimaryButton
 *      text="Contact Us"
 *      onClick={() => alert('hello world')}
 * />
 * @example
 * <PrimaryButton
 *      text="Contact Us"
 *      onClick={() => alert('hello world')}
 *      className="contactButton"
 *      disabled
 * />
 */
export default function PrimaryButton({text, className, onClick, disabled = false}: PrimaryButtonProps) {
    return (
        <button
            className={`primaryButton ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    )
}