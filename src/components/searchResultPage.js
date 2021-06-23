import React from "react";
import "./searchResultPage.scss";

function SearchResultPage(props) {
  
    return (
        <div className="search-result-page"> 
        {props.searchResult.map((photo) => {
                return <img className="search-result-page__image" src={photo.url_s} key={photo.id} alt={photo.tittle}></img>
            })}      
        </div>
    )
}

export default SearchResultPage