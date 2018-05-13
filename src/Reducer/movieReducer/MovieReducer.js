import reducerUtilities from '../reducerUtilities';
import {SafeCopy} from  '../../Utilities/ObjectUtilities';
import {MovieModel} from '../../Actions/Models/MovieModel';
import {MovieTypes} from '../../Actions/Types/MovieTypes';
import moment from 'moment';

import '../../Utilities/Extensions/StringExtentions';

export default function MovieReducer(state=[], action){

    //debugger;
    let data = [];

    if(action.type.startsWith(MovieTypes.MOVIE_PREFIX)){
        data = SafeCopy(action.data);
    }


    switch (action.type){
        case MovieTypes.MOVIE_LOAD_SUCCESS:


            data.map((item) =>{

                let releaseDate = new Date(item[MovieModel.p_ReleaseDate.name]);
                item[MovieModel.p_releaseDateRaw.name] = moment(releaseDate).format('LL');
                item[MovieModel.p_domesticGrossRaw.name] = item[MovieModel.p_DomesticGross.name].ConvertMoneyStringToDouble();

            });

            debugger;

            return reducerUtilities.createReturnObject(
                action.type,
                data
            );

        case MovieTypes.MOVIE_UPDATE_SUCCESS:
        case MovieTypes.MOVIE_ADD_SUCCESS:

            return reducerUtilities.createReturnObject(
                action.type,
                data
            );



        default:
            return state;
    }

}