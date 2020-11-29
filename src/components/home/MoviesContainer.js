import React, { Component } from 'react'
import {connect} from "react-redux"
import MovieCard from "./MovieCard";

export class MoviesContainer extends Component {
    render() {
        const {movies}=this.props;
        let content=""; //be aware to use let keyword here
        
        content=movies.Response==="True" ? movies.Search.map((movie,index)=>
            <MovieCard  key={index} movie={movie} />
        ) : null;
        return (
            <div className="movies">
                {content}
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    movies:state.movies.movies
})

export default connect(mapStateToProps)(MoviesContainer) 
