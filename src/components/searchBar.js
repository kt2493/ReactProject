import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = { term:'' };
    }

    // onInputChange(event){
    //     this.setState({term:event.target.value});
    // }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render(){
        return (
            <div className="search-bar">
                <input 
                className="search-bar-input"
                value = {this.state.term}
                onChange={event => this.onInputChange(event.target.value)} />
                {/* Value of the input : {this.state.term} */}
            </div>
        );
        // Can be written as an arrow functon 
        // in place of event handler
        // return <input onChange={event => console.log(event.target.value)} />;
    }
}

export default SearchBar;