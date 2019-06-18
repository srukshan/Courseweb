import React, { Component } from 'react'
import Navigation from './Navigation'
import DisplayNotes from './DisplayNotes'

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Navigation/>
                <DisplayNotes/>
            </div>
        )
    }
}
