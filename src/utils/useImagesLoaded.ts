import { useState, useEffect } from 'react';

export function useImagesLoaded() {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const pageImages = [...document.querySelectorAll('img')];

        function checkImageStatuses(images: HTMLImageElement[]) {
            return images.every((img) => img.complete);
        }
        if (checkImageStatuses(pageImages)) {
            setImagesLoaded(true);
        } else {
            setTimeout(() => checkImageStatuses(pageImages), 500);
        }
    }, [setImagesLoaded]);

    return imagesLoaded;
}
