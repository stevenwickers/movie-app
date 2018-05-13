import React from 'react';
import autoBind from '../../../../../../Utilities/autoBind';
import pagingModel from '../Models/pagingModel';
import * as pagingAttributes from '../Models/pagingModel';

class ownerPaginationCallBackEvents{

    /*** Paging Callback to Parent - Owner ***/
    handlePagingCallBack(model){

        const stateVariableName = model[pagingAttributes.PARENT_STATE_VARIABLE];

        if(stateVariableName != ''){

            this.setState({
                [stateVariableName]: model
            });

        }

    }

    //target needs to be the calling page
    static bind(model)
    {

        /*** Bind the parent (owner) of the model to the call back method ***/

        //Get a reference to the Parent object
        let parent = pagingModel.getParentReference(model);



        if(typeof(parent) !== "object"){

            throw new Error("Must pass in parent referent to Paging Model. Use 'this' for parent parameter!");

        }

        //Bind the parent to this file
        autoBind(ownerPaginationCallBackEvents, parent);

        //Wire up the callback event to the parent
        pagingModel.setCallBack(model, parent.handlePagingCallBack);

    }

}

export default ownerPaginationCallBackEvents;