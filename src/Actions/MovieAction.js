import * as QueryActions from './QueryActions';
import {MovieModel} from './Models/MovieModel';
import {MovieTypes} from './Types/MovieTypes';

const apiRoute = 'movies'


export function getMovies(){
    return function (dispatch){
        debugger;
        QueryActions._queryData(apiRoute,dispatch,MovieTypes.MOVIE_LOAD_SUCCESS)
    }
}

export function getMoviesByID(id){

    let url = `${apiRoute}/${id}`;

    return function (dispatch){
        QueryActions._queryData(url,dispatch,MovieTypes.MOVIE_LOAD_SUCCESS)
    }
}

export function addMovie(data){

    debugger;

    return function (dispatch){
        QueryActions._processData(apiRoute,dispatch,data,'POST',MovieTypes.MOVIE_ADD_SUCCESS, MovieTypes.MOVIE_ADD_FAILED)
    }
}

export function updateMovie(data){

    debugger;

    let id = data[MovieModel.p_MovieId.name];
    let url = `${apiRoute}/${id}`;

    return function (dispatch){
        QueryActions._processData(url,dispatch,data,'PUT',MovieTypes.MOVIE_UPDATE_SUCCESS, MovieTypes.MOVIE_UPDATE_FAILED)
    }
}

export function deleteMovie(id){

    let url = `${api}/${id}`

    return function (dispatch){
        QueryActions._processData(apiRoute,dispatch,data,'DELETE',MovieTypes.MOVIE_DELETE_SUCCESS, MovieTypes.MOVIE_DELETE_FAILED)
    }
}