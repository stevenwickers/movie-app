import express from 'express';
import {MovieModel} from '../../src/Actions/Models/MovieModel';
import {data} from '../../src/DataProvider/StaticData/MovieData'
import {AutoMap} from '../../src/Utilities/ObjectUtilities';


var routes = function(movie){

    let staticMovieRouter = express.Router();

    staticMovieRouter.route('/movies')

    //*** GET ALL MOVIES
        .get(function(req, res){

            res.json(data);

        })

        //*** POST MOVIE
       .post(function(req, res){


            debugger;

            let body = JSON.stringify(req.body);
            console.log('Movie POST: ',body);

            let model = JSON.parse(body);
            let movieName = model[MovieModel.p_MovieName.name];
            console.log(movieName);

            //Check if the Movie Name already exists
            if(!data.find(x => x[MovieModel.p_MovieName.name] === movieName)){


                model[MovieModel.p_MovieId.name] = data.length + 1;

                console.log('POST Model: ', model);
                data.push(model);


                res.send(model).status(200);


            } else {

                res.status(409).send('Duplicate Movie Name!')

            }


        });



    //Custom MiddleWare
    /*staticMovieRouter.use('/movies/:id', function(req, res, next){
            let body = JSON.stringify(req.body);
            let model = JSON.parse(body);

            //Find item by id passed in
            let index = data.findIndex(x => x[MovieModel.p_MovieId.name] === req.params.id);
     });*/



    staticMovieRouter.route('/movies/:id')
        .get(function(req, res){

            console.log('Find Movie by Id: ', req.params.id);

            let movie = data.filter(x => x[MovieModel.p_MovieId.name] === req.params.id);

            res.json(movie);

        })

        .put(function(req, res) {

            console.log('PUT');

            let body = JSON.stringify(req.body);
            let model = JSON.parse(body);
            let id = parseInt(req.params.id);

            console.log('PUT Body:',body);
            console.log('ID->', id);

            //Find item by id passed in
            let index = data.findIndex(x => x[MovieModel.p_MovieId.name] === id);

            console.log('PUT',index);

            //Check if item found
            if(index !== -1){

                //Use Auto Map to update the existing record with new values passed in
                //!***Note: any model properties with 'sealed:true' will not be updated only when model type is passed in

                data[index] = AutoMap(data[index], model, MovieModel);


                res.json(data[index]);

            } else {

                res.status(500).send('Record Not Found')

            }


        });

    return staticMovieRouter;
};

module.exports = routes;