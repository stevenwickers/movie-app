export const PAGE_SIZE = 'pageSize';
export const TOTAL = 'total';
export const PAGE_NUMBER = 'pageNum';
export const ROW_START = 'rowStart';
export const ROW_END = 'rowEnd';
export const TOTAL_BUTTONS = 'totalButtons';
export const TOTAL_PAGES = 'totalPages';
export const CALL_BACK_FUNCTION = 'callBackFunction';
export const PARENT_STATE_VARIABLE = 'parentStateVariable';
export const PARENT_REFERENCE = 'owner';
export const LAST_PAGE = 'lastPage';
export const STYLE_NAME = 'styleName';


class pagingModel{
    constructor(parent, itemsPerPage=10, numberOfButtons=10, stateVariable='pagingModel'){
        this.owner = parent;
        this.pageSize = itemsPerPage;
        this.totalButtons = numberOfButtons;
        this.totalPages = 0;
        this.total = 0;
        this.pageNum = 1;                         //Current Page Number
        this.rowStart = 0;                        //First Item of the current page
        this.rowEnd = itemsPerPage;               //Last Item of the current page
        this.lastPage = 0;                        //Last Calculated Page
        this.parentStateVariable = stateVariable; //Used for multiple paging state variables on same page
        this.callBackFunction = null;             //This is set within the paging component
        this.styleName = '';
    }


    /*** Public Static Methods ***/
    static resetPaging(model){

        debugger;

        model[PAGE_NUMBER] = 1;
        model[ROW_START]=0;
        model[ROW_END] = model[PAGE_SIZE];

    }

    static incrementTotal(model){
        let total = model[TOTAL];
        model[TOTAL] = total + 1;
    }

    static decrementTotal(model){
        let total = model[TOTAL];
        model[TOTAL] = total - 1;

        //reset to first pages
        this.resetPaging(model);
    }

    static setCallBack(model, callBack){

        model[CALL_BACK_FUNCTION] = callBack;

    }

    static setLastPage(model, lastPage){

        model[LAST_PAGE] = lastPage;

    }

    static setStyleName(model, style){
        model[STYLE_NAME] = style;
    }

    static setTotal(model, total){

        model[TOTAL] = total;

    }


    /*** GETTERS ***/
    static getCurrentPage(model){

        return model[PAGE_NUMBER];

    }

    static getLastPage(model){

        return model[LAST_PAGE];

    }

    static getParentReference(model){

        return model[PARENT_REFERENCE];

    }

    static getStateVariable(model){

        return model[PARENT_STATE_VARIABLE];

    }

    static getTotal(model){

        return model[TOTAL];

    }


    static getRowEnd(model){

        return model[ROW_END];

    }

    static getRowStart(model){

        return model[ROW_START];

    }

}

export default pagingModel;
