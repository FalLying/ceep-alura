import Lista from "./components/Lista/Lista";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Component } from "react";
import ListaDeCategorias from "./components/ListaDeCategorias";
import Categorias from "./data/Categorias";
import ArrayDeNotas from "./data/Notas";

class App extends Component {
  constructor() {
    super();

    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render() {
    return (
      <div className="background">
        <FormularioCadastro
          categorias={this.categorias}
          criarNota={this.notas.criarNota.bind(this.notas)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria.bind(
              this.categorias
            )}
            categorias={this.categorias}
          />
          <Lista
            apagarNota={this.notas.deletarNotas.bind(this.notas)}
            notas={this.notas}
          />
        </main>
      </div>
    );
  }
}

export default App;
