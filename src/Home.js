import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from './Header.js';

export default class Home extends Component {
    render() {
        return (
            <div className="flex-col home-main">
                <Header title="Home"/>
                <div className="flex-col link-div">
                    <Link to="/pokeList">Check out this list of pokemon!</Link>
                </div>
            </div>
        )
    }
}
