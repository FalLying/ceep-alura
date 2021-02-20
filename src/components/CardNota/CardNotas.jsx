import React, { Component } from "react";
import "./estilo.css";
import { ReactComponent as DeleteSVG } from "../../assets/img/delete.svg";

class CardNota extends Component {
  apagar() {
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }
  render() {
    return (
      <section className="card-nota">
        <header>
          <h3 className="card-titulo">{this.props.nota.titulo}</h3>
          <DeleteSVG onClick={this.apagar.bind(this)} />
          <h4 className="card-titulo">{this.props.categoria}</h4>
        </header>
        <p className="card-desc">{this.props.nota.desc}</p>
      </section>
    );
  }
}

export default CardNota;
