import React, { useEffect, useState } from "react";
import "./CollectionPage.scss";
import Button from '@material-ui/core/Button';

function CollectionPage() {
    const [state, setState] = useState([]);

    useEffect(() => {
        const newPhotoCollection = [...state];
        const imageFinderPhotoCollection = JSON.parse(localStorage.imageFinderPhotoCollection)
        for (var key in imageFinderPhotoCollection) {newPhotoCollection.push(imageFinderPhotoCollection[key])}
        setState(newPhotoCollection)
        // eslint-disable-next-line
    }, [])

    function removePhoto(e) {
        const imageFinderPhotoCollection = JSON.parse(localStorage.imageFinderPhotoCollection)
        const photoId = e.target.parentElement.id
        delete imageFinderPhotoCollection[photoId]
        localStorage.setItem('imageFinderPhotoCollection', JSON.stringify(imageFinderPhotoCollection))
        setState(state.filter(item => item.id !== photoId));
    }

    return (
        <div className="collection-page">
            {state.map((photo) => {
                return <div className="collection-page__image-box" key={photo.id}>
                    <img className="collection-page__image" src={photo.url_s} alt={photo.tittle}></img>
                    <Button variant="contained" className="collection-page__button" id={photo.id} onClick={removePhoto}>Remove it!</Button>
                </div>
            })}
        </div>
    )
}

export default CollectionPage