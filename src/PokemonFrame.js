import React, { Component } from 'react'

export default class PokemonFrame extends Component {
    render() {
        return (
            <div className="pokemon-frame">
                <div>{this.props.name}</div>
                <div className="flex-row">
                    <img src={this.props.image} alt=""></img>
                    <ul>
                        <li>Type One: {this.props.typeOne}</li>
                        <li>Type Two: {this.props.typeTwo}</li>
                        <li>Health: {this.props.health}</li>
                        <li>Attack: {this.props.attack}</li>
                        <li>Defense: {this.props.defense}</li>
                    </ul>
                </div>
            </div>
        )
    }
}
