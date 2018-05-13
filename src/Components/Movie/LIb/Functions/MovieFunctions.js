import {TransposeModelToDataObject} from '../../../../Utilities/ObjectUtilities';
import {MovieModel} from '../../../../Actions/Models/MovieModel';
import moment from 'moment';

export function CreateNewMovieModel(){

    //Create a new Movie Obejct from the Movie Model
    let item = TransposeModelToDataObject(MovieModel);

    //Preset the Dates
    let releaseDate = new Date();
    item[MovieModel.p_releaseDateRaw.name] = moment(releaseDate).format('LL');
    item[MovieModel.p_ReleaseDate.name] = releaseDate.toLocaleDateString();

    //Return save copy
    return Object.assign({}, item);

}