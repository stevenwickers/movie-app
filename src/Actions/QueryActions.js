import * as ApiHelper from '../DataProvider/ApiStore';
import {beginAjaxCall, endAjaxCall, ajaxCallError, resetAllAjaxCalls} from "../DataProvider/Ajax/AjaxActions";

export function dispatchData(dispatchType, data){
    return {type: dispatchType, data}
}

export function _queryData(url, dispatch, dispatchType){
    debugger;

    dispatch(beginAjaxCall());
    ApiHelper.processGetPromise(url)
        .then((data) => {
            dispatch(dispatchData(dispatchType, data))
        }).catch(error => {
        console.log(error);
        dispatch(endAjaxCall());
        dispatch(dispatchData(dispatchType, error));
    });
}

export function _processData(url, dispatch, data, httpType, dispatchType, failedType){

    dispatch(beginAjaxCall());
    ApiHelper.processMaintainPromise(data, url, httpType)
        .then((data) => {
            dispatch(dispatchData(dispatchType, data))
        }).catch(error => {
        console.log(error);
        dispatch(dispatchData(failedType, error));
    });

}
