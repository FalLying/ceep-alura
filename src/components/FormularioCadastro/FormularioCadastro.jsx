import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.desc = "";
    this.categoria = "Sem categoria";
    this.state = { categorias: [] };
    this._novasCategorias = this._novasCategorias.bind(this);
  }
  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias);
  }
  componentWillUnmount() {
    this.props.categorias.desinscrever(this._novasCategorias);
  }
  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }
  handleMudaTitulo(e) {
    this.titulo = e.target.value;
  }
  handleMudaDesc(e) {
    this.desc = e.target.value;
  }
  handleMudancaCategoria(e) {
    e.stopPropagation();
    this.categoria = e.target.value;
  }
  criarNota(e) {
    e.preventDefault();
    this.props.criarNota(this.titulo, this.desc, this.categoria);
  }
  render() {
    return (
      <form onSubmit={this.criarNota.bind(this)} className="formCadastro">
        <label className="formLabel" htmlFor="inputTitulo">
          Categoria
        </label>
        <select
          onChange={this.handleMudancaCategoria.bind(this)}
          className="formInput"
        >
          <option>Sem Categoria</option>
          {this.state.categorias.map((categoria, index) => (
            <option key={index}>{categoria}</option>
          ))}
        </select>
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
