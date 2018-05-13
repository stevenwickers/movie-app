import React from 'react';
import {MovieModel} from '../../../../Actions/Models/MovieModel';
import {MemberTypes} from "../../../../Actions/Types/MemberTypes";
import {MovieTypes} from "../../../../Actions/Types/MovieTypes";
import {API_TYPES} from '../../../../Actions/Types/ApiTypes';
import autoBind from "../../../../Utilities/autoBind"
import moment from 'moment';
import toastr from 'toastr';

//functions
import '../../../../Utilities/Extensions/ArrayExtensions';


class PageLifeCycleEvents {

    componentDidMount() {
        this.props.actions.getMovies();
        this.props.actions.getMemberById(1);
    }

    componentWillReceiveProps(nextProps) {

        if (this.props.movies !== nextProps.movies) {

            debugger;

            let reducedType = nextProps.movies.type;
            let reducedData = [...nextProps.movies.results];
            let modMode = this.state.modifyingMode;
            let displayPopup = this.state.isFormVisible;
            let sortDirection = this.state.sortAsc;


            switch (reducedType) {
                case MovieTypes.MOVIE_LOAD_SUCCESS:

                    //let data = moviesResults.results;
                    reducedData.SortData(this.state.lastColumnSort, true);
                    sortDirection = true;

                    break;

                case MovieTypes.MOVIE_ADD_SUCCESS:

                    if(reducedData[API_TYPES.API_RESULT] === API_TYPES.API_OK){

                        debugger;

                        let movieStateData = this.state.movieData;

                        movieStateData.push(reducedData[API_TYPES.API_RESULTS]);
                        reducedData = movieStateData;
                        modMode = '';
                        displayPopup = false;

                        //Sort the data
                        reducedData = reducedData.SortData(this.state.lastColumnSort, this.state.sortAsc)

                        toastr.success('Added Success.');


                    } else {

                        toastr.error('Error.');

                    }

                    break;

                case MovieTypes.MOVIE_UPDATE_SUCCESS:

                    if(reducedData[API_TYPES.API_RESULT] === API_TYPES.API_OK){

                        let movies = this.state.movieData;
                        let updatingItem = this.state.movieItem;
                        let idx = movies.findIndex(x => x[MovieModel.p_MovieId.name] === updatingItem[MovieModel.p_MovieId.name]);

                        if(idx > -1){

                            let updatedDate = updatingItem[MovieModel.p_ReleaseDate.name];
                            updatingItem[MovieModel.p_releaseDateRaw.name] = moment(updatedDate).format('LL');

                            movies[idx] = updatingItem;

                        }

                        reducedData = movies;
                        modMode = '';
                        displayPopup = false;

                        toastr.success('Added Success.');

                    } else {

                        toastr.error('Error.');

                    }


                    break;
            }

            this.setState({
                movieData: reducedData,
                sortAsc: sortDirection,
                modifyingMode: modMode,
                isFormVisible: displayPopup,
            });



        }

        if (this.props.member !== nextProps.member) {

            let memberResults = nextProps.member;

            switch (memberResults.type) {
                case MemberTypes.MEMBER_LOAD_SUCCESS:

                    this.setState({
                        memberData: memberResults.results
                    });

                    break;
            }

        }

    }

    static bind(target){
        autoBind(PageLifeCycleEvents, target)
    }

}

export default PageLifeCycleEvents;


