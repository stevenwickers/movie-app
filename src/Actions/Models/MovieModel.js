export const MovieModel = {
    p_MovieId: {name:'movie_id', value:'', sealed: true},
    p_MovieName: {name:'movie_name', value:'', length:'50'},
    p_ReleaseDate: {name:'release_date', value:''},
    p_WorldWideGross: {name:'worldwide_gross', value:''},
    p_ProductionBudget: {name:'production_budget',  value:''},
    p_MovieLink: {name:'movie_link',  value:'', length:'150'},
    p_DomesticGross: {name:'domestic_gross',  value:''},

    //Properties not part of the API return data
    p_releaseDateRaw: {name: 'raw_date', value:''},
    p_domesticGrossRaw: {name: 'raw_domestic_gross', value:''},
};