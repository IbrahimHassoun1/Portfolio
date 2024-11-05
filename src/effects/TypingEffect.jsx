import  { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const TypingEffect = ({ text, speed }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isBlinking, setIsBlinking] = useState(false);
    const [typingIndex, setTypingIndex] = useState(0); // Track typing index

    useEffect(() => {
        // Function to handle typing effect
        const typeCharacter = () => {
            if (typingIndex < text.length) {
                setDisplayedText((prev) => prev + text.charAt(typingIndex));
                setTypingIndex((prev) => prev + 1);
                // Blink cursor before typing the next character
                setIsBlinking(true);
                setTimeout(() => setIsBlinking(false), speed / 2); // Blink duration
            } else {
                clearInterval(typingInterval); // Stop typing when finished
                setIsBlinking(true); // Start blinking indefinitely after typing is done
            }
        };

        // Blink indefinitely after typing is complete
        const typingInterval = setInterval(() => {
            if (typingIndex < text.length) {
                typeCharacter();
            } else {
                clearInterval(typingInterval); // Clear typing interval
            }
        }, speed);

        return () => clearInterval(typingInterval); // Cleanup interval on unmount
    }, [text, speed, typingIndex]);

    useEffect(() => {
        // Indefinite blinking cursor after typing is done
        let blinkInterval;
        if (typingIndex === text.length) {
            blinkInterval = setInterval(() => {
                setIsBlinking((prev) => !prev); // Toggle blinking
            }, 500); // Blink every 500ms
        }

        return () => clearInterval(blinkInterval); // Cleanup blinking interval
    }, [typingIndex, text.length]);

    return (
        <span className='opacity-80'>
            {displayedText}
            {isBlinking ? <span>|</span> : null} {/* Render blinking cursor */}
        </span>
    );
};

TypingEffect.propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number,
};

TypingEffect.defaultProps = {
    speed: 150, // Default typing speed
};

export default TypingEffect;
