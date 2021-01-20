import React, { Component } from "react";
import "./estilo.css";

class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header>
          <h3 className="card-titulo">{this.props.nota.titulo}</h3>
        </header>
        <p className="card-desc">{this.props.nota.desc}</p>
      </section>
    );
  }
}

export default CardNota;
