export function IsObjectEmpty(obj){

    let isEmptyObject = true;

    if(obj instanceof Object){

        isEmptyObject = Object.keys(obj).length === 0;

    }


    return isEmptyObject;
}

export function SafeCopy(obj){

    return JSON.parse(JSON.stringify(obj));

}

export function TransposeModelToDataObject(model){

    //Take a well formatted model and create
    //a model with database column names and values.
    //
    // @model -> this needs to be the properties of the model
    //
    //NOTE: Any model property declarate with 'sealed' will be ignored regardless
    //      if set to TRUE or FALSE!!!
    //
    //                                                               SEALED
    //                                                                 |
    //                                                                 V
    //          p_MovieId: {name:'movie_id', type: Number, value:'1', sealed: true}
    //
    //
    //Examples:
    //                                       database column
    //                                           |
    //                   formatted Name          |              value
    //                          |                |                 |
    //                          V                V                 V
    //  Formatted: model.pMovieName = {name:'movie_name',value:'My Movie'}
    //
    //              database column
    //                  |
    //                  |       value
    //                  |         |
    //                  V         V
    //  Internal:  movie_name: 'My Movie'

    let rawModel = {};
    let properties = Object.entries(model);

    for(let i=0;i<properties.length;i++){

        let attributes = properties[i][1];

        if(!attributes.hasOwnProperty('sealed')){

            //Create New model with proper DB names
            rawModel[attributes.name] = attributes.value;

        }

    }

    return rawModel;
}

export function AutoMap(target, source, modelType=null){

    //This will map values from source to target
    //This is useful when updating Models within routes
    //
    //Note: modelType is used only to check for SEALED properties

    if(!target instanceof Object && !source instanceof Object){
        throw new Error('Object only');
    }

    let properties = Object.entries(target);
    let sealedModelTypes = [];

    if(properties === undefined){
        properties = Object.entries(Object.entries(JSON.parse(JSON.stringify(item))));
    }

    if(modelType != null){

        sealedModelTypes = GetModelAttributesByKeyName(modelType, 'sealed')

    }


    for (let i = 0; i < properties.length; i++) {

        let property = properties[i];
        let attributeName = property[0];
        let sealed = false;

        if(modelType !== null){

            //Determine if property has SEALED attribute and if so get value
            //sealed = _getModelSealedAttributesValue(modelType, attributeName);

            let hasSealed = sealedModelTypes.filter(x => x['name'] === attributeName);

            if(hasSealed.length > 0){
                sealed = hasSealed[0].sealed;
            }

        }


        if(!sealed && source.hasOwnProperty(attributeName)){

            target[attributeName] = source[attributeName];

        }

    }

    return target;

}

function GetModelAttributesByKeyName(model, attributeKeyName){

    //This will return all attributes that contain attributeKeyName
    //
    //Example:
    //
    //  If attributeKeyName == 'sealed'
    //
    //                                                               SEALED
    //                                                                 |
    //                                                                 V
    //          pMovieId: {name:'movie_id', type: Number, value:'1', sealed: true}
    //
    //Returned Value:
    //
    //  -> {name:'movie_id', type: Number, value:'1', sealed: true}
    //

    let sealedResults = [];

    Object.entries(model).forEach((item)=> {

        if(item[1][attributeKeyName]){
            sealedResults.push(item[1]);
        }

    });

    return sealedResults;

}