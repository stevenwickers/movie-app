import * as QueryActions from './QueryActions';
import {MemberTypes} from './Types/MemberTypes';
const apiRoute = 'members';


export function getMemberById(id){

    let url = `${apiRoute}/?${id}`;

    return function (dispatch){
        debugger;
        QueryActions._queryData(url,dispatch,MemberTypes.MEMBER_LOAD_SUCCESS)
    }
}

