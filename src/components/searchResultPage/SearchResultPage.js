import React, { useState } from "react";
import "./SearchResultPage.scss";

function SearchResultPage(props) {
    const [field, setFields] = useState({
        tags: '',
        id: 0
    })

    function setPhoto(e) {
        let photoCollection = JSON.parse(localStorage.imageFinderPhotoCollection)
        photoCollection[e.target.id] = props.searchResult.find(item => item.id === e.target.id)
        localStorage.setItem('imageFinderPhotoCollection', JSON.stringify(photoCollection))
        e.target.disabled = true
    }

    function handleChange(e) {
        e.preventDefault();
        const newFields = { ...field };
        newFields.tags = e.target.value;
        newFields.id = e.target.id;
        setFields(newFields);
    }

    function setTag(e) {
        e.preventDefault();
        const imageFinderPhotoCollection = JSON.parse(localStorage.imageFinderPhotoCollection)
        if(imageFinderPhotoCollection[field.id])imageFinderPhotoCollection[field.id].tags = field.tags
        localStorage.setItem('imageFinderPhotoCollection', JSON.stringify(imageFinderPhotoCollection))
        e.target.reset()
    }

    return (
        <div className="search-result-page">
            <section className="search-result-page__pagination">
                <button className="search-result-page__pagination_button-1" onClick={props.buttonBack}>Back</button>
                <select className="search-result-page__pagination_select" onChange={props.pageNumbers}>
                    <option className="search-result-page__pagination_select_option">Page 1 of 10</option>
                    <option className="search-result-page__pagination_select_option">Page 1 of 25</option>
                </select>
                <button className="search-result-page__pagination_button-2" onClick={props.buttonForward}>Forward</button>
            </section>
            <section className="search-result-page__images">
                {props.searchResult.map((photo) => {
                    return <div className="search-result-page__images_image-box" key={photo.id}>
                        <img className="search-result-page__images_image" src={photo.url_s} alt={photo.tittle}></img>
                        <button className="search-result-page__images_button" onClick={setPhoto} id={photo.id}>Bookmark it!</button>
                        <form onSubmit={setTag}>
                            <input className="search-result-page__images_input" placeholder=" some tags?" onChange={handleChange} id={photo.id}></input>
                        </form>
                    </div>
                })}
            </section>
        </div>
    )
}

export default SearchResultPage