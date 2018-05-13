const STATIC_API_URL_PART = '/sapi/';

class ApiUtilities{

    static getFormattedApiUrl(url){

        let apiUrl = window.location.origin;

        apiUrl += STATIC_API_URL_PART; //Getting Static Data from demo

        apiUrl += url;

        console.log(apiUrl);

        return apiUrl;

    }

}

export default ApiUtilities;