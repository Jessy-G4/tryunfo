import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Nome: '',
      descricao: '',
      Atributo1: 0,
      Atributo2: 0,
      Atributo3: 0,
      url: '',
      Raridade: undefined,
      Tryunfo: true,
      submit: true,
    };
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const { Nome, descricao, Atributo1, Atributo2, Atributo3, url } = prevState;
  //   const valorMax = 90;
  //   const valorTotalMax = 210;
  //   const valorMinimo = 0;
  //   if (Nome.length <= 1) {
  //     this.setState({ submit: true });
  //   }
  //   if (url.length <= 1) {
  //     this.setState({ submit: true });
  //   }
  //   if (descricao.length <= 1) {
  //     this.setState({ submit: true });
  //   }
  //   if (Atributo1 > valorMax) {
  //     tthis.setState((prev) => ({ submit: !prev }));
  //   }
  //   if (Atributo1 < valorMinimo) {
  //     this.setState({ submit: true });
  //   }
  //   if (Atributo2 > valorMax) {
  //     this.setState({ submit: true });
  //   }
  //   if (Atributo2 < valorMinimo) {
  //     this.setState({ submit: true });
  //   }
  //   if (Atributo3 > valorMax) {
  //     this.setState({ submit: true });
  //   }
  //   if (Atributo3 < valorMinimo) {
  //     this.setState({ submit: true });
  //   }
  //   if (Atributo1 + Atributo2 + Atributo3 === valorTotalMax) {
  //     this.setState({ submit: true });
  //   }
  // }

isSaveButtonDisabled = () => {
  const arrayTodosOsEstados = Object.values(this.state).map((get) => get);
  // const filtrando = arrayTodosOsEstados.filter((get) => get.length >= 1);
  const oito = 8;
  return arrayTodosOsEstados.length < oito ? this.setState({ submit: true })
    : this.setState({ submit: false });
};

desabilitar = () => {
  // const travar = this.setState({ submit: true });
  const { Nome, descricao, Atributo1, Atributo2, Atributo3, url } = this.state;
  const valorMax = 90;
  const valorTotalMax = 210;
  const valorMinimo = 0;
  const valor1 = Number(Atributo1);
  const valor2 = Number(Atributo2);
  const valor3 = Number(Atributo3);
  const valorAtr = valor1 + valor2 + valor3;
  if (Nome.length <= 2) {
    return this.setState({ submit: true });
  }
  if (url.length <= 2) {
    return this.setState({ submit: true });
  }
  if (descricao.length <= 2) {
    return this.setState({ submit: true });
  }
  if (Atributo1 > valorMax) {
    return this.setState({ submit: true });
  }
  if (Atributo1 < valorMinimo) {
    return this.setState({ submit: true });
  }
  if (Atributo2 > valorMax) {
    return this.setState({ submit: true });
  }
  if (Atributo2 < valorMinimo) {
    return this.setState({ submit: true });
  }
  if (Atributo3 > valorMax) {
    return this.setState({ submit: true });
  }
  if (Atributo3 < valorMinimo) {
    return this.setState({ submit: true });
  }
  if (valorAtr > valorTotalMax) {
    return this.setState({ submit: true });
  }
  return this.isSaveButtonDisabled();
};

 handleChange = (evento) => {
   const { name, type, checked, value } = evento.target;
   this.setState({ [name]: type === 'checkbox' ? checked : value },
     () => this.desabilitar());
 }

 render() {
   const {
     Nome,
     descricao,
     Atributo1,
     Atributo2,
     Atributo3,
     url,
     Raridade,
     Tryunfo,
     submit,
   } = this.state;
   return (
     <div>
       <h1>Tryunfo</h1>
       <Form
         cardName={ Nome }
         cardDescription={ descricao }
         cardAttr1={ Atributo1 }
         cardAttr2={ Atributo2 }
         cardAttr3={ Atributo3 }
         cardImage={ url }
         cardRare={ Raridade }
         cardTrunfo={ Tryunfo }
         hasTrunfo
         isSaveButtonDisabled={ submit }
         onInputChange={ this.handleChange }
         onSaveButtonClick
       />
       <Card
         cardName={ Nome }
         cardDescription={ descricao }
         cardAttr1={ Atributo1 }
         cardAttr2={ Atributo2 }
         cardAttr3={ Atributo3 }
         cardImage={ url }
         cardRare={ Raridade }
         cardTrunfo={ Tryunfo }
       />
     </div>);
 }
}

export default App;
