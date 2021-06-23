import React, { useState } from "react";
import "./startPage.scss";
import SearchResultPage from "./searchResultPage";
import axios from "axios";

function StartPage() {
    const [field, setFields] = useState({
        keyWord: '',
    })

    const [searchResult, setSearchResult] = useState([])

    function change(e) {
        const newFields = { ...field };
        newFields[e.target.name] = e.target.value;
        setFields(newFields);
    }

    async function auth(e) {
        e.preventDefault();
        const response = await axios.get(`https://api.flickr.com/services/rest?sort=relevance&parse_tags=1&content_type=7&extras=can_comment%2Ccan_print%2Ccount_comments%2Ccount_faves%2Cdescription%2Cisfavorite%2Clicense%2Cmedia%2Cneeds_interstitial%2Cowner_name%2Cpath_alias%2Crealname%2Crotation%2Curl_sq%2Curl_q%2Curl_t%2Curl_s%2Curl_n%2Curl_w%2Curl_m%2Curl_z%2Curl_c%2Curl_l&per_page=50&page=2&lang=en-US&text=${field.KeyWord}&color_codes=8&viewerNSID=&method=flickr.photos.search&csrf=&api_key=f8827807d7445e9b5fc4693a1a0efd31&format=json&hermes=1&hermesClient=1&reqId=bb057ea8&nojsoncallback=1`)
        setSearchResult(response.data.photos)
    }
    
    return (
        <div className="start-page">
            <form onSubmit={auth}>
                <input className="start-page__input" placeholder="Find images" onChange={change} name="keyWord"></input>
            </form>
            {!!searchResult.photo ? <SearchResultPage searchResult={searchResult.photo} /> : <p className="start-page__empty-block">No images here. Would you try to search for anything else?</p>}
        </div>
    )
}

export default StartPage