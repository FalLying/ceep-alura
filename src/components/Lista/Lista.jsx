import React, { Component } from "react";
import CardNota from "../CardNota/CardNotas";
import "./estilo.css";

class Lista extends Component {
  constructor() {
    super();
    this.state = { notas: [] };
    this._novasNotas = this._novasNotas.bind(this);
  }
  componentDidMount() {
    this.props.notas.inscrever(this._novasNotas);
  }
  componentWillUnmount() {
    this.props.notas.desinscrever(this._novasNotas);
  }
  _novasNotas(notas) {
    this.setState({ ...this.state, notas });
  }
  render() {
    return (
      <ul className="ul">
        {this.state.notas.map((item, index) => {
          return (
            <li key={index}>
              <CardNota
                indice={index}
                nota={item}
                apagarNota={this.props.apagarNota}
                categoria={item.categoria}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Lista;
