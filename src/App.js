import Lista from "./components/Lista/Lista";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
    };
  }

  criarNota(titulo, desc) {
    const novaNota = { titulo, desc };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstado);
  }

  render() {
    return (
      <div className="background">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <Lista notas={this.state.notas} />
      </div>
    );
  }
}

export default App;
