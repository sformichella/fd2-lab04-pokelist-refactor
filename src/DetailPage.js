import React, { Component } from 'react';
import request from 'superagent';

export default class DetailPage extends Component {

    state = {
        pokemonId: this.props.match.params.pokeId,
        pokemon: [],
    }

    componentDidMount = async () => {
        const pokemon = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/${this.state.pokemonId}`)

        this.setState({
            pokemon: JSON.parse(pokemon.text)
        })
    }

    render() {

        return (
            <div className="pokemon-detailed flex-column">
                {
                    this.state.pokemon.length === 0 ? 'loadering!' :
                    <>
                    <h1>{this.state.pokemon.pokemon}</h1>
                    <div className="flex-row">
                        <img src={this.state.pokemon.url_image} alt=""></img>
                        <ul>
                            <li>Type One: {this.state.pokemon.type_1}</li>
                            <li>Type Two: {this.state.pokemon.type_2}</li>
                            <li>Health: {this.state.pokemon.hp}</li>
                            <li>Attack: {this.state.pokemon.attack}</li>
                            <li>Defense: {this.state.pokemon.defense}</li>
                            <li>Height: {this.state.pokemon.height}</li>
                            <li>Weight: {this.state.pokemon.weight}</li>
                        </ul>
                    </div>
                    </>
                }
            </div>
        )
    }
}
