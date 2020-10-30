import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="header flex-row">
                <p>{this.props.title}</p>
            </div>
        )
    }
}
