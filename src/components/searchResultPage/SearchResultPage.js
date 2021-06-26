import React from "react";
import "./SearchResultPage.scss";

function SearchResultPage(props) {

    function setPhoto(e) {
        localStorage.setItem(`${e.target.id}`, JSON.stringify(props.searchResult.find(item => item.id === e.target.id)))
        e.target.disabled = true
    }

    return (
        <div className="search-result-page">
            {props.searchResult.map((photo) => {
                return <div className="search-result-page__image-box" key={photo.id}>
                    <img className="search-result-page__image" src={photo.url_s} alt={photo.tittle}></img>
                    <button className="search-result-page__button" onClick={setPhoto} id={photo.id}>Bookmark it!</button>
                </div>
            })}
        </div>
    )
}

export default SearchResultPage