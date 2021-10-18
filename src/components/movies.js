import React ,{Component} from 'react';
import MovieItem from './movieitem';
class Movies extends Component
{
    render(){
        return this.props.films.map((film)=>{
           return <MovieItem myfilm={film} key={film.imdbID}></MovieItem>
        });
    }
}

export default Movies;