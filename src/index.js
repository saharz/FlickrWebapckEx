/**
 * Created by Sahar Zakay.
 */
// import UtilService from './services/util.js';
require("./index.css");
import DomService from './services/domService.js';
import ApiService from './services/apiService.js';

(function(window) {
    'use strict';

    function getFlickrThumbnails(){
        DomService.showLoadingSpinner();
        ApiService.getFliclkrPublicThumbnails(function(response) {
            response['authorHandler'] = getAuthorFlickrThumbnails;
            DomService.hideLoadingSpinner();
            DomService.showPublicFlickrGallery(response);
        });
    }

    function getAuthorFlickrThumbnails(authorId){
        DomService.showLoadingSpinner();
        DomService.removeAllImgFromGallery();
        ApiService.getAuthorFlickrThumbnails(authorId, function(response) {
            DomService.hideLoadingSpinner();
            DomService.showPublicFlickrGallery(response);
        });
    }

    window.onload = getFlickrThumbnails;
})(window);