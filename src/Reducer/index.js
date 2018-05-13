import {combineReducers} from 'redux';
import ajaxCallsInProcess from './ajaxReducer/ajaxStatusReducer';
import MovieResults from './movieReducer/MovieReducer';
import MemberResults from './memberReducer/MemberReducer';

const rootReducers = combineReducers({

    MovieResults,
    MemberResults,
    ajaxCallsInProcess

});

export default rootReducers;

