import { useState, useEffect } from 'react';

interface UseTypingEffectOptions {
    text: string;
    typingSpeed?: number;
    deletingSpeed?: number;
    delayBeforeDelete?: number;
    delayBeforeType?: number;
    loop?: boolean;
    initialDelay?: number;
}

export const useTypingEffect = (
    text: string,
    typingSpeed: number = 100,
    initialDelay: number = 0,
    loop: boolean = false,
    delayBeforeDelete: number = 1500,
    delayBeforeType: number = 500,
    deletingSpeed: number = 50
) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        let currentIndex = 0;
        let hasStarted = false;

        const startTimeout = setTimeout(() => {
            hasStarted = true;

            const animate = () => {
                if (!loop && isComplete) return;

                // Typing phase
                if (!isDeleting) {
                    if (currentIndex < text.length) {
                        setDisplayedText(text.slice(0, currentIndex + 1));
                        currentIndex++;
                        timeoutId = setTimeout(animate, typingSpeed);
                    } else {
                        setIsComplete(true);
                        if (loop) {
                            // Wait before starting to delete
                            timeoutId = setTimeout(() => {
                                setIsDeleting(true);
                                animate();
                            }, delayBeforeDelete);
                        }
                    }
                }
                // Deleting phase
                else {
                    if (currentIndex > 0) {
                        currentIndex--;
                        setDisplayedText(text.slice(0, currentIndex));
                        timeoutId = setTimeout(animate, deletingSpeed);
                    } else {
                        setIsDeleting(false);
                        setIsComplete(false);
                        // Wait before typing again
                        timeoutId = setTimeout(animate, delayBeforeType);
                    }
                }
            };

            animate();
        }, initialDelay);

        return () => {
            clearTimeout(startTimeout);
            clearTimeout(timeoutId);
        };
    }, [text, typingSpeed, deletingSpeed, delayBeforeDelete, delayBeforeType, loop, initialDelay]);

    return { displayedText, isComplete, isDeleting };
};
