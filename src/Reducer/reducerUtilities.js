export default class reducerUtilities{

    static createReturnObject(actionType, results){

        return Object.assign({},{
            type:actionType,
            results:results,
        })

    }

}

