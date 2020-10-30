import React, { Component } from 'react';
import request from 'superagent';
import Header from './Header.js';
import ListTools from './ListTools';
import PokeList from './PokeList.js';

export default class ListPage extends Component {

    state = {
        pokeData: [],
        searchInput: '',
        searchParam: 'pokemon',
        sortOrder: 'ascending',
        sortType: 'pokemon',
    }

    handleTextInputChange = e => {
        this.setState({
            searchInput: e.target.value
        });
    }

    handleSearchParamChange = e => {
        this.setState({
            searchParam: e.target.value
        })
    }

    handleButtonSubmit = async () => {
        await this.fetchPokemon()
    }

    handleSortOrder = e => {
        this.setState({
            sortOrder: e.target.value
        })
    }

    handleSortType = e => {
        this.setState({
            sortType: e.target.value
        })
    }

    componentDidMount = async () => {
        await this.fetchPokemon()
    }

    fetchPokemon = async () => {
        const pokeData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.state.searchParam}=${this.state.searchInput}&sort=${this.state.sortType}&direction=${this.state.sortOrder}`)

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
                        inputHandler = {this.handleTextInputChange}
                        sortTypeHanlder = {this.handlerSortType}
                        sortOrderHandler = {this.handlerSortOrder}
                        buttonHandler = {this.handleButtonSubmit}
                        searchParamChange = {this.handleSearchParamChange}
                        sortTypeChange = {this.handleSortType}
                        sortOrderChange = {this.handleSortOrder}
                    />
                    <PokeList
                        data = {this.state.pokeData}
                    />
                </div>
            </div>
        )
    }
}
