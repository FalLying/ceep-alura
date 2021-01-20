import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.desc = "";
  }
  handleMudaTitulo(e) {
    this.titulo = e.target.value;
  }
  handleMudaDesc(e) {
    this.desc = e.target.value;
  }
  criarNota(e) {
    e.preventDefault();
    this.props.criarNota(this.titulo, this.desc);
  }
  render() {
    return (
      <form onSubmit={this.criarNota.bind(this)} className="formCadastro">
        <label className="formLabel" htmlFor="inputTitulo">
          Título
        </label>
        <input
          onChange={this.handleMudaTitulo.bind(this)}
          name="inputTitulo"
          className="formInput"
          type="text"
        />
        <label className="formLabel" htmlFor="inputDesc">
          Descrição
        </label>
        <textarea
          onChange={this.handleMudaDesc.bind(this)}
          rows={5}
          name="inputDesc"
          className="formTextArea"
        ></textarea>
        <br />
        <button className="formButton">Criar nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;
