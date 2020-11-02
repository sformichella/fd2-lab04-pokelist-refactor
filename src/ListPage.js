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
        currentPage: 1,
        perPage: 20,
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
    
    handleSortOrder = async e => {
        await this.setState({
            sortOrder: e.target.value
        })

        this.fetchPokemon();
    }
    
    handleSortType = async (e) => {
        await this.setState({
            sortType: e.target.value
        })

        this.fetchPokemon();
    }
    
    handleButtonSubmit = async () => {
        await this.fetchPokemon();
    }

    componentDidMount = async () => {
        await this.fetchPokemon();
    }

    fetchPokemon = async () => {
        this.setState({
            pokeData: []
        })

        const pokeData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.state.searchParam}=${this.state.searchInput}&sort=${this.state.sortType}&direction=${this.state.sortOrder}&page=${this.state.currentPage}&perPage=${this.state.perPage}`)

        this.setState({
            pokeData: pokeData.body
        })
    }

    handlePokeFrameClick = (pokeId) => {
        this.props.history.push(`/pokelist/${pokeId}`);
    }

    handlePaging = async (direction) => {
        if (direction === 'next') {
            await this.setState({
                currentPage: this.state.currentPage + 1
            })

            this.fetchPokemon()
        }

        if (direction === 'prev') {
            await this.setState({
                currentPage: this.state.currentPage - 1
            })

            this.fetchPokemon()
        }
    }

    render() {
        console.log(this.state.currentPage);
        return (
            <div>
                <Header title="Pokemon List"/>
                <div className="list-page-main flex-row">
                    <ListTools 
                        data = {this.state.pokeData}
                        inputHandler = {this.handleTextInputChange}
                        sortTypeHanlder = {this.handlerSortType}
                        sortOrderHandler = {this.handlerSortOrder}
                        buttonHandler = {this.handleButtonSubmit}
                        searchParamChange = {this.handleSearchParamChange}
                        sortTypeChange = {this.handleSortType}
                        sortOrderChange = {this.handleSortOrder}
                        searchParam = {this.state.searchParam}
                        pagingHandler = {this.handlePaging}
                        currentPage = {this.state.currentPage}
                        perPage = {this.state.perPage}
                    />
                    <PokeList
                        data = {this.state.pokeData}
                        pokeFrameClickHandler = {this.handlePokeFrameClick}
                    />
                </div>
            </div>
        )
    }
}
