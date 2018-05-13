import {MovieModel} from '../../../../Actions/Models/MovieModel';
import DateUtilities, {DateCompareResults} from '../../../../Utilities/DateUtilities';
import moment from 'moment';
import toastr from 'toastr';

class Validation{

    static IsMovieModelValid(model, movies){

        let isValid = true;
        let movieIDValue = model[MovieModel.p_MovieId.name];
        let moveNameValue = model[MovieModel.p_MovieName.name];
        let linkValue = model[MovieModel.p_MovieLink.name];
        let dateValue = model[MovieModel.p_ReleaseDate.name];

        let isUpdating = movieIDValue > 0;

        //Movie Name
        if(moveNameValue.trim() === ''){

            toastr.error('Movie Name is Required');
            isValid = false;

        } else {

            let exists = movies.filter(x => x[MovieModel.p_MovieName.name] === moveNameValue);

            if(exists.length > 0){

                if(exists[0][MovieModel.p_MovieId.name] !== movieIDValue){

                    toastr.error('Duplicate Movie Name!');
                    isValid = false;

                }

            }


        }


        //Release Date
        if(dateValue === ''){

            toastr.error('Release date is Required');
            isValid = false;

        } else {

            let compareDate = DateUtilities.compare(dateValue, moment());
            if(compareDate !== DateCompareResults.DateLessThen){

                toastr.error('Release Date must be less than today.');
                isValid = false;

            }

        }


        //Link
        if(linkValue.trim() !== ''){

            if(!linkValue.startsWith('http://www.')){

                toastr.error('Invalid Link. Please enter in a valid link');
                isValid = false;

            }

        }


        return isValid;

    }

}

export default Validation;