import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//Action Files
import * as MovieActions from '../../Actions/MovieAction';
import * as MemberActions from '../../Actions/MemberActions';

//Models
import {MovieModel} from "../../Actions/Models/MovieModel";

//Movie Grid
import MovieList from './Lib/Lists/MovieList';

//Paging Control
import PagingControl from '../Common/Controls/Paging/PaginationControl';
import pagingModel from '../Common/Controls/Paging/Lib/Models/moviesPagingModel';

//Pages
import AddEditMoviePopup from './LIb/Pages/AddEditMoviePopup';

//Event Pages
import PageLifeCycleEvents from "./LIb/PageEventHandlers/PageLifeCycleEvents";
import ControlEvents from './Lib/PageEventHandlers/ControlEvents';

//Utilities
import {CreateNewMovieModel} from './Lib/Functions/MovieFunctions';
import '../../Utilities/Extensions/ArrayExtensions';

//Styles
import '../Common/Styles/translucentStyles.css';
import '../Common/Styles/formSyles.css';
import '../Common/Styles/panelStyles.css';
import './Lib/CSS/MoviePageStyles.css';

class MovieContainer extends React.Component{
    constructor(props){
        super(props);


        this.state={
            movieData: [],
            memberData: [],
            movieItem: CreateNewMovieModel(),

            lastColumnSort: MovieModel.p_MovieName.name,
            sortAsc: true,

            pagingModel: new pagingModel(this,10,10),
            movieResult: [],
            isCalendarVisible: false,
            isFormVisible: false,
            modifyingMode: '',
        };

        //Bind Events
        PageLifeCycleEvents.bind(this);
        ControlEvents.bind(this);

        //Sort Mode Event
        this.onSortModel = this.onSortModel.bind(this);

    }


    onSortModel(columnName){

        let movies = this.state.movieData;
        let lastColumnSort = this.state.lastColumnSort;
        let sortDirection = this.state.sortAsc;

        if(columnName === lastColumnSort){
            sortDirection = !sortDirection;
        } else {
            sortDirection = true;
        }

        movies.SortData(columnName, sortDirection);

        this.setState({
            movieData:movies,
            lastColumnSort: columnName,
            sortAsc: sortDirection,
        })

    }


    render(){

        debugger;


        //Set Paging Model Total
        pagingModel.setTotal(this.state.pagingModel, this.state.movieData.length);

        const displayPopup = {
            'display' : this.state.isFormVisible ? 'block' : 'none'
        };

        return(
            <div>

                <div style={displayPopup}>

                   <AddEditMoviePopup model={this.state.movieItem}
                                  title={this.state.modifyingMode}
                                  calendarVisible={this.state.isCalendarVisible}
                                  onCalClick={this.handelCalendarClick}
                                  onToggleCalendar={this.handleCalendarDisplay}
                                  onClose={this.handleCloseAddEditForm}
                                  onInputChange={this.handelInputChange}/>
                </div>

                <div style={{paddingLeft:15, paddingRight:15}}>

                    <div className="grid-container fluid panel" >

                        <div className="panel-header">
                            <div className="grid-x">
                                <div className="large-9 columns">
                                    Movie Listing {this.props.isLoading && 'Loading DATA....'}
                                </div>
                                {this.state.memberData.length > 0 &&

                                    <div className="large-3 columns memberFont">
                                        Member: {this.state.memberData[0]['member_fullName']} <br />
                                        Email:  {this.state.memberData[0]['email_address']}
                                    </div>

                                }

                            </div>
                        </div>


                        <div className="grid-x panel-body">

                            <div className=" medium-12 column ">

                                {!this.props.isLoading &&

                                    <MovieList searchResults={this.state.movieData}
                                        pagingModel={this.state.pagingModel}
                                        onSort={this.onSortModel}
                                        onRowEdit={this.handleEditMovieForm}/>

                                }



                            </div>

                            <div className=" medium-12 column button-right-align">

                                <PagingControl model={this.state.pagingModel} />

                            </div>

                            <div className=" medium-12 columns">

                                <Link to=""
                                      className="button primary button-right-align"
                                      onClick={()=>this.handleAddMovieForm(0)}>Add</Link>

                            </div>


                        </div>

                    </div>
                </div>

            </div>

        )
    }
}

const mapStateToProps = (state, ownProps) =>{

    return{

        movies: state.MovieResults,
        member: state.MemberResults,

        isLoading: state.ajaxCallsInProcess > 0,

    }

};

const mapDispatchToProps = (dispatch) =>{
    return{
        actions: bindActionCreators(Object.assign({}, MovieActions, MemberActions), dispatch)
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(MovieContainer)