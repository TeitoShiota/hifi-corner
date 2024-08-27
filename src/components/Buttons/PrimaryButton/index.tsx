'use client';

import './PrimaryButton.scss';

interface PrimaryButtonProps {
    text: string;
    // onClick: () => void;
    className?: string;
}

export default function PrimaryButton({text, className}: PrimaryButtonProps) {
    return (
        <button className={`primaryButton ${className}`}>
            {text}
        </button>
    )
}