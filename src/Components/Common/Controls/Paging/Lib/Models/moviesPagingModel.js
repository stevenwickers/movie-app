import React from 'react';
import pagingModel from './pagingModel';
import * as pagingStyleTypes from '../Constants/pagingStyleTypes';

class moviesPagingModel extends pagingModel{
    constructor(parent, itemsPerPage=10, numberOfButtons=10, stateVariable='pagingModel'){
        super(parent, itemsPerPage, numberOfButtons, stateVariable);

        this.styleName = pagingStyleTypes.movies;
    }
}


export default moviesPagingModel;