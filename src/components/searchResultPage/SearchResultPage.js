import React from "react";
import "./SearchResultPage.scss";

function SearchResultPage(props) {

    function setPhoto(e) {
        let photoCollection = JSON.parse(localStorage.imageFinderPhotoCollection)
        photoCollection[e.target.id] = props.searchResult.find(item => item.id === e.target.id)
        localStorage.setItem('imageFinderPhotoCollection', JSON.stringify(photoCollection))
        e.target.disabled = true
    }

    return (
        <div className="search-result-page">
            <section className="search-result-page__pagination">
                <button className="search-result-page__pagination_button" onClick={props.buttonBack}>Back</button>
                <select className="search-result-page__pagination_select" onChange={props.pageNumbers}>
                    <option className="search-result-page__pagination_select_option">Page 1 of 10</option>
                    <option className="search-result-page__pagination_select_option">Page 1 of 25</option>
                </select>
                <button className="search-result-page__pagination_button" onClick={props.buttonForward}>Forward</button>
            </section>
            <section className="search-result-page__images">
                {props.searchResult.map((photo) => {
                    return <div className="search-result-page__images_image-box" key={photo.id}>
                        <img className="search-result-page__images_image" src={photo.url_s} alt={photo.tittle}></img>
                        <button className="search-result-page__images_button" onClick={setPhoto} id={photo.id}>Bookmark it!</button>
                        <input className="search-result-page__images_input" placeholder=" some tags?"></input>
                    </div>
                })}
            </section>
        </div>
    )
}

export default SearchResultPage