import React, { Component } from 'react';

export default class ListTools extends Component {
    render() {
        return (
            <div className="flex-col list-tools">
                <p>Filter By Search</p>
                <div>
                    <input
                        type="radio" 
                        name="search-params"
                        value="pokemon"
                        onChange = {this.props.searchParamChange}
                    />Name
                    <input
                        type="radio"
                        name="search-params"
                        value="type_1"
                        onChange = {this.props.searchParamChange}
                    />Type One
                    <input
                        type="radio"
                        name="search-params"
                        value="type_2"
                        onChange = {this.props.searchParamChange}
                    />Type Two
                </div>
                <input onChange={this.props.inputHandler}/>
                <button onClick={this.props.buttonHandler}>Submit</button>
                <p>Sort By Attribute</p>
                <div>
                    <select onChange={this.props.sortTypeChange}>
                        <option value="pokemon">Name</option>
                        <option value="type_1">Type One</option>
                        <option value="type_2">Type Two</option>
                        <option value="hp">Health</option>
                        <option value="attack">Attack</option>
                        <option value="defense">Defense</option>
                    </select>

                    <select onChange = {this.props.sortOrderChange}>
                        <option value="ascending">Ascending Order</option>
                        <option value="descending">Descending Order</option>
                    </select>
                </div>
            </div>
        )
    }
}
