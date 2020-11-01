import React, { Component } from 'react';

export default class ListTools extends Component {
    render() {
        return (
            <div className="flex-col list-tools">
                <p>Filter By Search</p>
                <div>   
                    {
                        ['pokemon', 'type_1', 'type_2'].map(param => {
                            if (this.props.searchParam === param) {
                                return <label key={param}>
                                    <input 
                                        defaultChecked
                                        type="radio"
                                        name="search-params"
                                        value={param}
                                        onChange = {this.props.searchParamChange}
                                    /> {param}
                                </label>
                            }
                            return <label key={param}>
                                <input 
                                    type="radio"
                                    name="search-params"
                                    value={param}
                                    onChange = {this.props.searchParamChange}
                                /> {param}
                            </label>
                        })
                    }
                </div>
                <input onChange={this.props.inputHandler}/>
                <p>Sort By Attribute</p>
                <div>
                    <select onChange={this.props.sortTypeChange}>
                        <option value="">None</option>
                        <option value="pokemon">Name</option>
                        <option value="type_1">Type One</option>
                        <option value="type_2">Type Two</option>
                        <option value="hp">Health</option>
                        <option value="attack">Attack</option>
                        <option value="defense">Defense</option>
                    </select>

                    <select onChange = {this.props.sortOrderChange}>
                        <option value="asc">Ascending Order</option>
                        <option value="desc">Descending Order</option>
                    </select>

                    <button onClick={this.props.buttonHandler}>Submit</button>
                </div>
            </div>
        )
    }
}
