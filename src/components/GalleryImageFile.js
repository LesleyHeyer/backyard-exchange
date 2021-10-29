import {React, useState} from 'react';

import style from './GalleryImageFile.module.css';

const GalleryImageFile = ({gallery, setGallery, galleryArray, galleryPhoto}) => {


    return (
        <div className={style.gallery_card}>
            <img className={style.gallery_image} src={galleryPhoto} />
        </div>
    )
}

export default GalleryImageFile;