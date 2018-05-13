import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './Components/App';
import MoviePage from './Components/Movie/MovieContainer';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={MoviePage}/>
  </Route>
);
