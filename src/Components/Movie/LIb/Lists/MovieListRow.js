import React, {PropTypes} from 'react';
import {MovieModel} from '../../../../Actions/Models/MovieModel';
import FontAwesome from 'react-fontawesome';


const MovieListRow = ({movie, onEdit}) => {



    return (
        <tr>
            <td>{movie[MovieModel.p_MovieId.name]}</td>
            <td>{movie[MovieModel.p_MovieName.name]}</td>
            <td>{movie[MovieModel.p_releaseDateRaw.name]}</td>
            <td>{movie[MovieModel.p_ProductionBudget.name]}</td>
            <td>
                <a href={movie[MovieModel.p_MovieLink.name]} target="_blank">Movie Link</a>
            </td>
            <td>
                <a href="#" onClick={()=>onEdit(movie['movie_id'])}>
                <FontAwesome
                    className=""
                    name="pencil"
                    size="lg"/></a>
            </td>
        </tr>

    );
};

MovieListRow.propTypes = {
    movie: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
};

export default MovieListRow;


