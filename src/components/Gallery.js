import React, {useState} from "react";
import style from './Gallery.module.css'
import GalleryImageFile from './GalleryImageFile';


const Gallery = () => {

    const galleryArray = [
        "./assets/bbq1.jpg",
        "./assets/bbq2.png",
        "./assets/bbq3.jpg",
        "./assets/bbq4.jpg",
        "./assets/bbq5.jpg",
        "./assets/bbq6.jpg",
        "./assets/bbq7.jpg",
        "./assets/bbq8.jpg",
        "./assets/bbq9.jpg",
        "./assets/bbq10.jpg"
    ];

    const [gallery, setGallery] = useState(galleryArray);


    return (
        <div className={style.gallery}>
            <h2 className={style.title}>Gallery</h2>
            <body className={style.gallery_body}>
            
            <div className={style.gallery_image}>
                {gallery.map(galleryPhoto => (
                    <GalleryImageFile 
                    galleryPhoto={galleryPhoto} 
                    setGallery={setGallery} 
                    galleryArray={galleryArray} 
                    gallery={gallery}
                    />
                ))}
            </div>
            </body>
        </div>
    );
}

export default Gallery;