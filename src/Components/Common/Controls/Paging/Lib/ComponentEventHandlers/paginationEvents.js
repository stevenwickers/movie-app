import React from 'react'
import autoBind from '../../../../../../Utilities/autoBind';
import * as pagingAttributes from '../Models/pagingModel';

export const pagingCodes =({
    First: 'first',
    Last: 'last',
    Previous: 'previous',
    Next: 'next',
    ELLIPSE: -1,
});


class paginationEvents{

    buttonClick(buttonCode, pageNumber=1){

        let model = this.props.model;

        switch(buttonCode){
            case pagingCodes.Previous:

                if(pageNumber > 1) {
                    pageNumber--;
                }

                break;

            case pagingCodes.Next:

                if(pageNumber < model[pagingAttributes.TOTAL_PAGES]){
                    pageNumber++;
                }

                break;
        }

        model[pagingAttributes.PAGE_NUMBER.toString()] = pageNumber;
        model[pagingAttributes.ROW_START] = (pageNumber - 1) * model[pagingAttributes.PAGE_SIZE];
        model[pagingAttributes.ROW_END] = model[pagingAttributes.ROW_START] + model[pagingAttributes.PAGE_SIZE];


        //Execute Call Back
        if(model[pagingAttributes.CALL_BACK_FUNCTION] !== undefined){
            model[pagingAttributes.CALL_BACK_FUNCTION](model)
        }

    }

    getPages(total, pagingSize, currentPage){

        let pages = [];
        const totalModelButtons = this.props.model[pagingAttributes.TOTAL_BUTTONS];

        let middleButton = Math.trunc(totalModelButtons / 2);

        const totalPages = this.getLastPage(total, pagingSize);

        if(currentPage === undefined){
            currentPage = 0;
        }

        let loopCnt = 1;
        let startingPos = currentPage - middleButton > 0 ? currentPage - middleButton : 0;
        let remainder = totalPages - startingPos;

        if(remainder < totalModelButtons){
            startingPos -= totalModelButtons - remainder;

            if(startingPos < 0){
                startingPos = 0;
            }

        }

        //Create Buttons
        for(let i=startingPos;i<totalPages;i++){

            let page = i + 1;
            pages.push(page);

            if(loopCnt >= (totalModelButtons)){

                //Exit loop
                break;

            }

            loopCnt++;
        }

        //Display the button #1 (-1 for ellipse)
        if(pages.find(x => x == 1) == undefined){
            pages.unshift(1, pagingCodes.ELLIPSE)
        }

        //Display the last button
        if((startingPos + totalModelButtons) < totalPages){
            pages.push(pagingCodes.ELLIPSE, totalPages);
        }

        this.props.model[pagingAttributes.TOTAL_PAGES] = totalPages;

        return pages;
    };

    getLastPage(total, pagingSize){


        let result = Math.trunc(total / pagingSize);

        if(result == Number.POSITIVE_INFINITY || Number.isNaN(result)){

            //Division by Zero or not a number
            return 0;
        }

        let remainder = total % pagingSize;

        if(remainder > 0){
            result++;
        }

        return result;

    };


    static bind(target)
    {
        autoBind(paginationEvents, target);
    }

}

export default paginationEvents;