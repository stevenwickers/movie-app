import React, {PropTypes} from 'react';
import * as pagingButtonNames from './Lib/Constants/pagingButtonTypes';
import './Lib/Styles/pagingStyles.css'
import './Lib/Styles/customPagingStyles.css'

const UnorderedListControl = ({pages, currentPage, lastPage, styleName, buttonClick}) =>{

    let itemCnt = 0;

    const getActiveStyleName = (styleName) =>{
        //debugger;
        if(styleName == ''){

            return 'page-link';

        } else {

            return 'page-item active button primary ' + styleName;

        }

    };

    const displayNextButton = (currentPage, lastPage) =>{

        //debugger;
        let display = true;

        if(currentPage == lastPage){
            display = false;
        }

        return display;

    };

    return(
        <nav aria-label="Search results pages">
            <ul className="pagination">

                {currentPage != 1
                    ? <li className="page-item">
                            <a className="page-link" href="#" onClick={(e) => buttonClick(pagingButtonNames.PREVIOUS, currentPage)} name='previous'>
                                <i className="fa fa-chevron-left chevronStyle"> </i>
                            </a>
                        </li>
                    : <li className="" style={{padding:15}}> </li>
                }


                {pages.map((i) => {

                    itemCnt++;
                    switch (i) {
                        case pagingButtonNames.ELLIPSE:
                            return (
                                <li className="page-item" key={itemCnt}>
                                    <a className="ellipseButton disabledLink" href="#" name={i}>...</a>
                                </li>
                            )

                        case currentPage:
                            return (
                                <li className="page-item active"  key={itemCnt}>
                                    <a id="activeButton" className={getActiveStyleName(styleName)} href="#" onClick={(e) => buttonClick(pagingButtonNames.PAGE, i)} name={i}>{i.toString()}</a>
                                </li>
                            )

                        default:
                            return (
                                <li className="page-item"  key={itemCnt}>
                                    <a className="page-link" href="#" onClick={(e) => buttonClick(pagingButtonNames.PAGE, i)} name={i}>{i.toString()}</a>
                                </li>
                            )

                    }

                })}

                {displayNextButton(currentPage, lastPage)
                    ? <li className="page-item">
                        <a className="page-link" href="#" onClick={(e) => buttonClick(pagingButtonNames.NEXT, currentPage)} name='next'>
                            <i className="fa fa-chevron-right chevronStyle"> </i>
                        </a>
                      </li>
                    :<li className="" style={{padding:15}}> </li>
                }

            </ul>
        </nav>
    );

};

UnorderedListControl.propTypes = {
    pages: PropTypes.array.isRequired,
    currentPage: PropTypes.number.isRequired,
    lastPage: PropTypes.number.isRequired,
    styleName: PropTypes.string.isRequired,
    buttonClick: PropTypes.func.isRequired,
};


export default UnorderedListControl;