import ApiUtilities from './ApiUtilities';

export function processGetPromise(url){

    //Format Api Url
    let apiUrl = ApiUtilities.getFormattedApiUrl(url);

    return new Promise(function(resolve, reject){

        let xhr = new XMLHttpRequest();
        xhr.open('GET', apiUrl);
        xhr.onload = function(){

            let result = '';

            if(xhr.response !== ''){

                result = JSON.parse(xhr.response);

            } else {

                result = '[]';
                console.log("ERROR!")

            }


            resolve(result);

        };
        xhr.onerror = reject;
        xhr.send();
    })
}

export function processMaintainPromise(data, url, type){
    return new Promise(function(resolve, reject){


        debugger;

        //Format Api Url
        let apiUrl = ApiUtilities.getFormattedApiUrl(url);

        let jsonData = JSON.stringify(data);

        let xhr = new XMLHttpRequest();
        xhr.open(type, apiUrl);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function(){

            debugger;

            let result = [];

            if(xhr.status === 200 || xhr.status === 201){

                result.push(xhr.statusText.toString());
                result.push(data);
                result.push(JSON.parse(xhr.response));

                resolve(result);

            } else {

                result.push(xhr.statusText.toString());
                result.push(data);
                result.push(JSON.parse(xhr.response));

                reject(result);
            }
        };
        xhr.onerror = reject;
        xhr.send(jsonData);
    })
}