import React, { Component } from 'react'
import {connect} from "react-redux"
import {searchMovie,fetchMovies,setLoading} from "../../action/searchAction"

export class SearchForm extends Component {

    changeHandler=(e)=>{
        this.props.searchMovie(e.target.value);
    }

    submitHandler=(e)=>{
        e.preventDefault();
        if(this.props.text===""){
            alert(" Please provide a value")
        }
        
        else{
            this.props.fetchMovies(this.props.text);
            this.props.setLoading();
        }
       
    }
     
    render() {
        return (
            <div className="form">
                <h3>Search your favourite Movies and Tv series</h3>
                <form id="searchForm" onSubmit={this.submitHandler}>
                    <input type="text" name="searchText" onChange={this.changeHandler}
                        placeholder="Example mission,gravity,war..."/>
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    text:state.movies.text
})

export default connect(mapStateToProps,{searchMovie,fetchMovies,setLoading})(SearchForm)
