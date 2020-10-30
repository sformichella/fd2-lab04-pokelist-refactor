import React, { Component } from 'react';
import request from 'superagent';
import Header from './Header.js';
import ListTools from './ListTools';
import PokeList from './PokeList.js';

export default class ListPage extends Component {

    state = {
        pokeData: [],
        searchInput: ''
    }

    handleTextInputChange = e => {
        this.setState({
            searchInput: e.target.value
        });
        this.fetchPokemon()
    }

    componentDidMount = async () => {
        const pokeData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchInput}`)

        this.setState({
            pokeData: pokeData.body.results
        })
    }

    fetchPokemon = async () => {
        const pokeData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchInput}`)

        this.setState({
            pokeData: pokeData.body.results
        })
    }

    render() {

        return (
            <div>
                <Header title="Pokemon List"/>
                <div className="list-page-main flex-row">
                    <ListTools 
                        handler = {this.handleTextInputChange}
                    />
                    <PokeList
                        data={this.state.pokeData}
                    />
                </div>
            </div>
        )
    }
}
