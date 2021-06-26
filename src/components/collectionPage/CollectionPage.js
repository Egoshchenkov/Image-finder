import React, { useEffect, useState } from "react";
import "./CollectionPage.scss";
import Button from '@material-ui/core/Button';

function CollectionPage() {
    const [state, setState] = useState({
        photoCollection: []
    });

    useEffect(() => {
        const newPhotoCollection = state.photoCollection;
        for (var key in localStorage) {
            if (typeof (localStorage[key]) == "string" && localStorage[key] !== "undefined") newPhotoCollection.push(JSON.parse(localStorage[key]));
        }
        setState({
            photoCollection: newPhotoCollection,
        })
    }, [])

    function removePhoto(e) {
        localStorage.removeItem(`${e.target.parentElement.id}`)
        let filteredPhotoCollection = state.photoCollection.filter(item => item.id !== e.target.parentElement.id)
        setState({ photoCollection: filteredPhotoCollection });
    }

    return (
        <div className="collection-page">
            {state.photoCollection.map((photo) => {
                return <div className="collection-page__image-box" key={photo.id}>
                    <img className="collection-page__image" src={photo.url_s} alt={photo.tittle}></img>
                    <Button variant="contained" className="collection-page__button" id={photo.id} onClick={removePhoto}>Remove it!</Button>
                </div>
            })}
        </div>
    )
}

export default CollectionPage