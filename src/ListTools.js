import React, { Component } from 'react';

export default class ListTools extends Component {
    render() {
        return (
            <div className="flex-col list-tools">
                <p>Filter By Search</p>
                <input onChange={this.props.inputHandler}/>
                <button onClick={this.props.buttonHandler}>Submit</button>
                <p>Sort By Attribute</p>
                <div>
                    <select>
                        <option value="type_1">Type One</option>
                        <option value="type_2">Type Two</option>
                        <option value="hp">Health</option>
                        <option value="attack">Attack</option>
                        <option value="defense">Defense</option>
                    </select>

                    <select>
                        <option value="ascending">Ascending Order</option>
                        <option value="descending">Descending Order</option>
                    </select>
                </div>
            </div>
        )
    }
}
