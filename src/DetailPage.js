import React, { Component } from 'react'

export default class DetailPage extends Component {

    state = {
        pokemonId: this.props.match.params.pokeId,
    }

    fetchIndividualPokemon = (pokeId) => {
        console.log('');
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}
