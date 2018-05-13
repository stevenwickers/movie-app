import React, {PropTypes} from 'react';
import paginationEvents from './Lib/ComponentEventHandlers/paginationEvents';
import ownerPaginationCallBackEvents from './Lib/ComponentEventHandlers/ownerPaginationCallBackEvents';

import UnorderedList from './UnorderedListControl';
import * as pagingAttributes from './Lib/Models/pagingModel';

class PaginationControl extends React.Component{
    constructor(props){
        super(props);

        //debugger;

        this.state = {};

        //Pagination Events for the control
        paginationEvents.bind(this);

        //Callback Events for the parent
        ownerPaginationCallBackEvents.bind(this.props.model);

    }


    render(){

        if(this.props.model === undefined){
            return (
                <div>{''}</div>
            )
        }

        const total = this.props.model[pagingAttributes.TOTAL];
        const pagingSize = this.props.model[pagingAttributes.PAGE_SIZE];
        const currentPage = this.props.model[pagingAttributes.PAGE_NUMBER];

        const pages = this.getPages(total, pagingSize, currentPage);
        const styleName = this.props.model[pagingAttributes.STYLE_NAME];
        const lastPageIdx = pages.slice(-1)[0];

        return (
            <div>

                <div className="pull-right">

                    <UnorderedList
                        pages={pages}
                        currentPage={currentPage}
                        lastPage={lastPageIdx}
                        styleName={styleName}
                        buttonClick={this.buttonClick}
                    />

                </div>

            </div>
        )
    }

}

PaginationControl.propTypes = {
    model: PropTypes.object.isRequired,
    callBack: PropTypes.func,
};

PaginationControl.defaultProps = {
    model: {
        totalButtons: 10,
        pageSize: 10,
        totalPages:0,
        total: 0,
        pageNum: 1,
        rowStart: 0,
        rowEnd: 10,
    }
};

export default PaginationControl;
