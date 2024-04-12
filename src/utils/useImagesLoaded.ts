import { useState, useEffect } from 'react';

export function useImagesLoaded() {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const pageImages = [...document.querySelectorAll('img')];
        let intervalId: ReturnType<typeof setInterval>;

        function checkImageStatuses(images: HTMLImageElement[]) {
            if (images.every((img) => img.complete)) {
                clearInterval(intervalId);
                setImagesLoaded(true);
            }
        }

        intervalId = setInterval(() => checkImageStatuses(pageImages), 500);
    });

    return imagesLoaded;
}
