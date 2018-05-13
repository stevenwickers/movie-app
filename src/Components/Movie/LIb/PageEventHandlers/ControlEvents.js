import React from 'react';
import autoBind from '../../../../Utilities/autoBind';
import {MovieModel} from "../../../../Actions/Models/MovieModel";
import {CreateNewMovieModel} from '../Functions/MovieFunctions';
import Validation from './Valication';

const ModifyingModes = {
    Add: 'Add',
    Edit: 'Edit',
};

class ControlEvents{

    handelInputChange(model, e){

       if(e == null){
           return;
       }

       let name = e.target.name;

       model[name] = e.target.value;

       this.setState({
           movieItem: model,
       })


    }


    handleAddMovieForm(){

        //Create a new Movie Obejct from the Movie Model
        let item = CreateNewMovieModel();

        this.setState({
            movieItem: item,
            modifyingMode: ModifyingModes.Add,
            isFormVisible: true,
        })
    }

    handleEditMovieForm(id){

        debugger;

        //Get item from state by ID
        let item = this.state.movieData.filter(x => x['movie_id'] === id)[0];

        this.setState({
            movieItem: Object.assign({}, item),
            modifyingMode: ModifyingModes.Edit,
            isFormVisible: true,
        })

    }

    handleCloseAddEditForm(isSaving){

        debugger;

        if(isSaving){

            let movies = this.state.movieData;
            let item = this.state.movieItem;

            if(!Validation.IsMovieModelValid(item, movies)){

                return;

            }

            switch (this.state.modifyingMode){
                case ModifyingModes.Add :

                    //Adding
                    this.props.actions.addMovie(item);

                    return;


                case ModifyingModes.Edit :

                    //Updating
                    this.props.actions.updateMovie(item);


                    return;

            }

        }


        let item = CreateNewMovieModel();

        this.setState({
            movieItem: item,
            modifyingMode: '',
            isFormVisible: false,
        })

    }


    handleCalendarDisplay(){

        debugger;

        let visible = this.state.isCalendarVisible;

        this.setState({
            isCalendarVisible: !visible,
        })

    }

    handelCalendarClick(id, e){

        debugger;

        let date = e._d;
        let month = (date.getMonth() + 1).toString();
        let day = date.getDate().toString();
        let year = date.getFullYear().toString();
        let dataFormatted = month + '/' + day + '/' + year;


        let item = this.state.movieItem;
        item[MovieModel.p_ReleaseDate.name] = dataFormatted;

        this.setState({
            movieItem: item,
            isCalendarVisible: false,
        });



    }


    static bind(target){
        autoBind(ControlEvents, target)
    }

}

export default ControlEvents;