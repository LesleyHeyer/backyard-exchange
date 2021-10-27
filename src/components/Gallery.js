import React from "react";
import style from './Gallery.module.css'

const Gallery = () => {
    return (
        <div>
            <h2 className={style.title}>Gallery</h2>
            <body className={style.gallery_body}>
            <p>This is the GALLERY</p>
            </body>
        </div>
    );
}

export default Gallery;