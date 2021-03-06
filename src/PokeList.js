import React, { Component } from 'react';
import PokemonFrame from './PokemonFrame.js';
import './App.css'

export default class PokeList extends Component {
    render() {
        return (
            <div className="poke-list flex-row flex-center">
                {
                    this.props.data.length === 0 ? <>Loadering<iframe title="blah" src="https://giphy.com/embed/3o7bu3XilJ5BOiSGic" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe></>
                    : this.props.data.results.map(poke => {
                        return <PokemonFrame 
                            name = {poke.pokemon}
                            key = {poke.pokemon}
                            pokeId = {poke._id}
                            image = {poke.url_image}
                            typeOne = {poke.type_1}
                            typeTwo = {poke.type_2}
                            health = {poke.hp}
                            attack = {poke.attack}
                            defense = {poke.defense}
                            pokeFrameClickHandler = {this.props.pokeFrameClickHandler}
                        />
                    })
                }
            </div>
        )
    }
}
