import React, { Component } from 'react'
import Card from "./Card"
import PropTypes from "prop-types"

class Characters extends Component {
        render() {
                return (
                        this.props.characters.map((eachCharacter) => (
                                <Card key={eachCharacter.id} eachCharacter={eachCharacter} />
                        ))
                );
        }
}

Characters.propTypes = {
        characters: PropTypes.array.isRequired
}
export default Characters;