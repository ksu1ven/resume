import photo from '@assets/images/photo.png';

export function Photo() {
    return (
        <div className="photo-container">
            <div className="photo-container_inner">
                <img src={photo} alt="CatOksana" className="photo" />
            </div>
        </div>
    );
}
