import * as AjaxTypes from '../../DataProvider/Ajax/AjaxTypes';

function actionTypeEndsInSuccess(type){
    return type.substring(type.length - 8) === '_SUCCESS';
}

export default function ajaxStatusReducer(state = 0, action){
    //debugger;

    if(action.type === AjaxTypes.AJAX_REST_ALL_CALLS){

        return 0;

    }

    if(action.type === AjaxTypes.AJAX_ERROR){
        //debugger;
        state = 0;
        return action.error;
    }

    if(action.type === AjaxTypes.AJAX_BEGIN_CALL){

        return state + 1;

    } else if(actionTypeEndsInSuccess(action.type)){

        if(state > 0){
            return state - 1;
        } else {
            return state;
        }

    }

    return state;

}