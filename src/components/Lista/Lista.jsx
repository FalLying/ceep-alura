import React, { Component } from "react";
import CardNota from "../CardNota/CardNotas";
import "./estilo.css";

class Lista extends Component {
  render() {
    return (
      <ul className="ul">
        {this.props.notas.map((item, index) => {
          return (
            <li key={index}>
              <CardNota nota={item} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Lista;
