import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {
  _handleEventoInput(e) {
    if (e.key === "Enter") {
      console.log("Inserir");
    }
  }
  render() {
    return (
      <section className="sectionCategorias">
        <ul>
          <li>Categorias</li>
          <li>Categorias</li>
          <li>Categorias</li>
          <input
            placeholder="Adicionar categoria"
            type="text"
            onKeyUp={this._handleEventoInput.bind(this)}
          />
        </ul>
      </section>
    );
  }
}

export default ListaDeCategorias;
