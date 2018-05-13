import * as AjaxTypes from './AjaxTypes';

export function resetAllAjaxCalls(){
    return {type: AjaxTypes.REST_ALL_AJAX_CALLS}
}

export function beginAjaxCall(){
    return {type: AjaxTypes.AJAX_BEGIN_CALL}
}

export function endAjaxCall(){
    return {type: AjaxTypes.AJAX_END_CALL}
}


export function ajaxCallError(error) {
    return {type: AjaxTypes.AJAX_ERROR, error}
}