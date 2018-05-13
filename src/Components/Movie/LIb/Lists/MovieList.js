import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {MovieModel} from '../../../../Actions/Models/MovieModel';
import MovieListRow from './MovieListRow';
import * as pagingAttributes from '../../../Common/Controls/Paging/Lib/Models/pagingModel';
import '../../../Common/styles/tableStyles.css';

const MovieList = ({searchResults=[], pagingModel, onSort, onRowEdit}) =>{

    return (
        <table className="table tableBkColor">
            <thead>
            <tr className="table-header-color">
                <th>
                    <Link to="" onClick={()=>onSort(MovieModel.p_MovieId.name)}>Movie ID</Link>
                </th>
                <th>
                    <Link to="" onClick={()=>onSort(MovieModel.p_MovieName.name)}>Movie Name</Link>
                </th>
                <th>
                    <Link to="" onClick={()=>onSort(MovieModel.p_ReleaseDate.name)}>Release Date</Link>
                </th>
                <th>
                    <Link to="" onClick={()=>onSort(MovieModel.p_DomesticGross.name)}>Domestic Gross</Link>
                </th>
                <th>Movie Link</th>
                <th>Modify</th>
            </tr>
            </thead>
            <tbody>

            {searchResults.slice(pagingModel[pagingAttributes.ROW_START],pagingModel[pagingAttributes.ROW_END]).map((row, i) =>{
                return (<MovieListRow
                    key={i}
                    movie={row}
                    onEdit={onRowEdit}
                />);

            })}

            </tbody>
        </table>
    );

};

MovieList.propTypes = {
    searchResults:PropTypes.array.isRequired,
    pagingModel:PropTypes.object.isRequired,
    onSort: PropTypes.func.isRequired,
    onRowEdit:PropTypes.func.isRequired,
};


export default MovieList;
