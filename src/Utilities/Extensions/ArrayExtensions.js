Array.prototype.isEmpty = function(){

    let isEmptyObject = true;

    if(this instanceof Object){

        isEmptyObject = Object.keys(this).length === 0;

    }


    return isEmptyObject;

};

Array.prototype.SortData = function(key, isAscending=true){


    let result = this.sort(this.compareValues(key));

    if(!isAscending){
        //Reverse order
        result.reverse();
    }

    return result;

};

Array.prototype.SafeCopy = function(){

    return JSON.parse(JSON.stringify(this));

};

Array.prototype.compareValues = function(key){

    return function(a, b) {

        if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {

            //The property passed in is not found with in the array
            return 0;

        }

        const propA = (typeof a[key] === 'string')
            ? a[key].toUpperCase()
            : a[key];

        const propB = (typeof b[key] === 'string')
            ? b[key].toUpperCase()
            : b[key];

        let result = 0;

        if (propA > propB) {

            result = 1;

        }

        if (propA < propB) {

            result = -1;

        }


        return result;


    };


};

