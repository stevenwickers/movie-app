import express from 'express';
import {data} from '../../src/DataProvider/StaticData/MemberData'


var routes = function(member){

    let staticMemberRouter = express.Router();

    staticMemberRouter.route('/members')

        //*** GET ALL Members
        .get(function(req, res){

            res.json(data);

        });

    staticMemberRouter.route('/members/:id')
        .get(function(req, res){

            console.log('Find Member by Id: ', req.params.id);

            let id = parseInt(req.params.id);
            let movie = data.filter(x => x['member_id'] === id);

            res.json(movie);

        });

    return staticMemberRouter;
};

module.exports = routes;