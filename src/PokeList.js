import React, { Component } from 'react';
import PokemonFrame from './PokemonFrame.js';

export default class PokeList extends Component {
    render() {
        return (
            <div className="poke-list flex-row">
                {
                    this.props.data.map(poke => {
                        return <PokemonFrame 
                            name = {poke.pokemon}
                            image = {poke.url_image}
                            typeOne = {poke.type_1}
                            typeTwo = {poke.type_2}
                            health = {poke.hp}
                            attack = {poke.attack}
                            defense = {poke.defense}
                        />
                    })
                }
            </div>
        )
    }
}