import React, { useState } from "react";
import "./StartPage.scss";
import SearchResultPage from "../searchResultPage/SearchResultPage";
import axios from "axios";

function StartPage() {
    const [field, setFields] = useState({
        keyWord: '',
        page: 5,
        perPage: 10
    })

    const [searchResult, setSearchResult] = useState([])

    function change(e) {
        const newFields = { ...field };
        newFields[e.target.name] = e.target.value;
        setFields(newFields);
    }

    async function buttonBack() {
        const newFields = { ...field };
        newFields.page = newFields.page - 1;
        setFields(newFields);
        const response = await axios.get(`https://api.flickr.com/services/rest?sort=relevance&parse_tags=1&content_type=7&extras=can_comment%2Ccan_print%2Ccount_comments%2Ccount_faves%2Cdescription%2Cisfavorite%2Clicense%2Cmedia%2Cneeds_interstitial%2Cowner_name%2Cpath_alias%2Crealname%2Crotation%2Curl_sq%2Curl_q%2Curl_t%2Curl_s%2Curl_n%2Curl_w%2Curl_m%2Curl_z%2Curl_c%2Curl_l&per_page=${newFields.perPage}&page=${newFields.page}&lang=en-US&text=${newFields.keyWord}&viewerNSID=&method=flickr.photos.search&csrf=&api_key=bfe6ce4d5f9d4e425f7bf0b9db4fa329&format=json&hermes=1&hermesClient=1&reqId=5541ed04&nojsoncallback=1`)
        setSearchResult(response.data.photos)

    }

    async function buttonForward() {
        const newFields = { ...field };
        newFields.page = newFields.page + 1;
        setFields(newFields);
        const response = await axios.get(`https://api.flickr.com/services/rest?sort=relevance&parse_tags=1&content_type=7&extras=can_comment%2Ccan_print%2Ccount_comments%2Ccount_faves%2Cdescription%2Cisfavorite%2Clicense%2Cmedia%2Cneeds_interstitial%2Cowner_name%2Cpath_alias%2Crealname%2Crotation%2Curl_sq%2Curl_q%2Curl_t%2Curl_s%2Curl_n%2Curl_w%2Curl_m%2Curl_z%2Curl_c%2Curl_l&per_page=${newFields.perPage}&page=${newFields.page}&lang=en-US&text=${newFields.keyWord}&viewerNSID=&method=flickr.photos.search&csrf=&api_key=bfe6ce4d5f9d4e425f7bf0b9db4fa329&format=json&hermes=1&hermesClient=1&reqId=5541ed04&nojsoncallback=1`)
        setSearchResult(response.data.photos)
    }

    async function pageNumbers(e) {
        const newFields = { ...field };
        if(e.target.options.selectedIndex === 1) {newFields.perPage = 25}
        else {newFields.perPage = 10}
        setFields(newFields);
        const response = await axios.get(`https://api.flickr.com/services/rest?sort=relevance&parse_tags=1&content_type=7&extras=can_comment%2Ccan_print%2Ccount_comments%2Ccount_faves%2Cdescription%2Cisfavorite%2Clicense%2Cmedia%2Cneeds_interstitial%2Cowner_name%2Cpath_alias%2Crealname%2Crotation%2Curl_sq%2Curl_q%2Curl_t%2Curl_s%2Curl_n%2Curl_w%2Curl_m%2Curl_z%2Curl_c%2Curl_l&per_page=${newFields.perPage}&page=${newFields.page}&lang=en-US&text=${newFields.keyWord}&viewerNSID=&method=flickr.photos.search&csrf=&api_key=bfe6ce4d5f9d4e425f7bf0b9db4fa329&format=json&hermes=1&hermesClient=1&reqId=5541ed04&nojsoncallback=1`)
        setSearchResult(response.data.photos)
    }

    async function auth(e) {
        e.preventDefault();
        const response = await axios.get(`https://api.flickr.com/services/rest?sort=relevance&parse_tags=1&content_type=7&extras=can_comment%2Ccan_print%2Ccount_comments%2Ccount_faves%2Cdescription%2Cisfavorite%2Clicense%2Cmedia%2Cneeds_interstitial%2Cowner_name%2Cpath_alias%2Crealname%2Crotation%2Curl_sq%2Curl_q%2Curl_t%2Curl_s%2Curl_n%2Curl_w%2Curl_m%2Curl_z%2Curl_c%2Curl_l&per_page=${field.perPage}&page=${field.page}&lang=en-US&text=${field.keyWord}&viewerNSID=&method=flickr.photos.search&csrf=&api_key=bfe6ce4d5f9d4e425f7bf0b9db4fa329&format=json&hermes=1&hermesClient=1&reqId=5541ed04&nojsoncallback=1`)
        setSearchResult(response.data.photos)
    }
    
    return (
        <div className="start-page">
            <form onSubmit={auth}>
                <input className="start-page__input" placeholder="Find images" onChange={change} name="keyWord"></input>
            </form>
            {searchResult.photo ? <SearchResultPage searchResult={searchResult.photo} buttonBack={buttonBack} buttonForward={buttonForward} pageNumbers={pageNumbers}/> : <p className="start-page__empty-block">No images here. Would you try to search for anything else?</p>}
        </div>
    )
}

export default StartPage