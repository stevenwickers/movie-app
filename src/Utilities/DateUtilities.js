import React from 'react';
import moment from 'moment';


export const DateCompareResults = {

    'DateLessThen': 1,
    'DatesEqual': 0,
    'DateGreaterThan': 2,

};

class DataUtilities {

    static typeCheckDate(value){
        let result = value;

        if(typeof value === 'string'){
            result = new Date(value);
        }

        return result;
    }

    static compare(dateA, dateB, format='MM/DD/YYYY'){

        dateA = this.typeCheckDate(dateA);
        dateB = this.typeCheckDate(dateB);

        //////////////////////////////////
        //
        //  1  less than
        //  0  equal
        //  2  greater than
        //
        /////////////////////////////////

        let momentA = moment(dateA, format);
        let momentB = moment(dateB, format);

        let result = 0;

        if(momentA > momentB){
            result = 2;
        }

        if(momentA < momentB){
            result = 1;
        }

        return result;

    }

}

export default DataUtilities;