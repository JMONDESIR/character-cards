import React, { Component } from 'react'
import PropTypes from "prop-types"

export class Card extends Component {
        getStyles = () => {
                return {
                        margin: "10px 10px",
                        WebkitBoxShadow: "1px 1px 5px 0px rgba(0,0,0,0.75)",
                        MozBoxShadow: "1px 1px 5px 0px rgba(0,0,0,0.75)",
                        boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.75)",
                        width: "15vw",
                        height: "40vh",
                        border: "none",
                        borderRadius: "5px",
                        backgroundColor: "#d6c49f",
                        display: "flex",
                        flexDirection: "column",
                }
        }
        render() {
                return (
                        <div style={this.getStyles()}>
                                {/* <h3>{this.props.eachCharacter.name}</h3> */}
                        </div>
                )
        }
}

Card.propTypes = {
        characters: PropTypes.object.isRequired
}

export default Card
