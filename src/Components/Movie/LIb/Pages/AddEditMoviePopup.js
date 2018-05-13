import React, {PropTypes} from 'react'
import {MovieModel} from '../../../../Actions/Models/MovieModel';

import CalendarControl from '../../../Common/Controls/Calendar/CalendarControl';
import FontAwesome from 'react-fontawesome';

//functions
import '../../../../Utilities/Extensions/ArrayExtensions';


//Styles
import '../../../Common/Styles/translucentStyles.css';
import '../../../Common/Styles/formSyles.css';
import '../../../Common/Styles/panelStyles.css';

const AddEditMoviePopup = ({model, title, calendarVisible, onToggleCalendar, onCalClick,  onInputChange, onClose}) =>{


    const displayCalendar = {
        'display': calendarVisible ? 'block' : 'none'
     };

    debugger;

    return(

        <div className="translucent-form-overlay">

            <div className="grid-container panel" style={{width:800}} >

                <div className="panel-header">
                    <div className="grid-x row">
                        <div className="large-11 columns">
                            {title} Movie
                        </div>
                        <div className="row large-1 columns align-right">

                            <div onClick={()=>onClose(0)}>
                                <FontAwesome
                                    className=""
                                    name="times-circle-o"
                                    size="lg"/>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="grid-x panel-body">
                    <div className="medium-12 column ">

                        <form key={model[MovieModel.p_MovieId.name]}>
                            <div className="grid-x row">

                                <div className="medium-8 columns">
                                    <label>Movie Name</label>
                                    <input maxLength={model[MovieModel.p_MovieName.length]}
                                           value={model[MovieModel.p_MovieName.name]}
                                           name={MovieModel.p_MovieName.name}
                                           type="text"
                                           placeholder="Movie Name"
                                           onChange={(e)=>onInputChange(model, e)} />
                                </div>

                                {/* Calendar uses value because the calendar control is setting the vaue*/}
                                <div className="medium-3 columns">
                                    <label>Release</label>
                                    <input disabled="disabled"
                                           value={model[MovieModel.p_ReleaseDate.name]}
                                           name={MovieModel.p_ReleaseDate.name}
                                           type="text"/>

                                        <div style={displayCalendar}>
                                            <CalendarControl
                                                id={MovieModel.p_ReleaseDate.name}
                                                defaultDate={model[MovieModel.p_ReleaseDate.name]}
                                                onChange={onCalClick}
                                                onClick={onCalClick} />
                                        </div>

                                </div>


                                <div className="medium-1 column" style={{paddingTop:30,paddingLeft:5}}>
                                    <div onClick={onToggleCalendar}>
                                        <FontAwesome
                                            className=""
                                            name="calendar"
                                            size="lg"/>
                                    </div>



                                </div>

                            </div>
                            <div className="grid-x row ">

                                <div className="medium-4 columns">
                                    <label>Production Budget
                                        <input maxLength="25"
                                               defaultValue={model[MovieModel.p_ProductionBudget.name]}
                                               name={MovieModel.p_ProductionBudget.name}
                                               type="text"
                                               placeholder="Production Budget"
                                               onChange={(e)=>onInputChange(model, e)} />

                                    </label>
                                </div>

                                <div className="medium-4 columns">
                                    <label>Domestic Gross
                                        <input maxLength="25"
                                               defaultValue={model[MovieModel.p_DomesticGross.name]}
                                               name={MovieModel.p_DomesticGross.name}
                                               type="text"
                                               placeholder="Domestic Gross"
                                               onChange={(e)=>onInputChange(model, e)} />
                                    </label>
                                </div>

                                <div className="medium-4 columns">
                                    <label>World Wide Gross
                                        <input maxLength="25"
                                               defaultValue={model[MovieModel.p_WorldWideGross.name]}
                                               name={MovieModel.p_WorldWideGross.name}
                                               type="text"
                                               placeholder="World Wide Gross"
                                               onChange={(e)=>onInputChange(model, e)} />
                                    </label>
                                </div>

                            </div>


                            <div className="grid-x row ">

                                <div className="medium-12 columns">
                                    <label>Movie Link
                                        <input defaultValue={model[MovieModel.p_MovieLink.name]}
                                               name={MovieModel.p_MovieLink.name}
                                               maxLength={model[MovieModel.p_MovieLink.length]}
                                               type="text"
                                               placeholder="Movie Link"
                                               onChange={(e)=>onInputChange(model, e)} />

                                    </label>
                                </div>

                            </div>

                            <div className="grid-x row ">
                                <div className="medium-12 columns align-right">
                                    <button type="button"
                                            className="primary button radius"
                                            onClick={()=>onClose(1)}>
                                        Save
                                    </button>
                                </div>
                            </div>

                        </form>

                    </div>


                </div>


            </div>

        </div>
    )

};

AddEditMoviePopup.propTypes = {
    model: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    calendarVisible: PropTypes.bool.isRequired,
    onToggleCalendar: PropTypes.func.isRequired,
    onCalClick: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,


};

export default AddEditMoviePopup;

