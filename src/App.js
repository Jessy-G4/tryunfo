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
      Raridade: 'normal',
      Tryunfo: false,
      submit: true,
      salvo: [],
      trunfo: false,
    };
  }

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

 limparESalvar = (evento) => {
   evento.preventDefault();
   const { Nome, descricao, Atributo1, Atributo2, Atributo3,
     url, Raridade, Tryunfo, trunfo } = this.state;
   this.setState((prevState) => ({
     salvo: [...prevState.salvo, {
       NomeSalvo: Nome,
       descricaoSalvo: descricao,
       Atributo1Salvo: Atributo1,
       Atributo2Salvo: Atributo2,
       Atributo3Salvo: Atributo3,
       urlSalvo: url,
       RaridadeSalvo: Raridade,
       TryunfoSalvo: Tryunfo,
       trunfoSalvo: trunfo,
     }],
   }));
   //  this.setState({ trunfo: Tryunfo });
   this.setState({
     Nome: '',
     descricao: '',
     Atributo1: 0,
     Atributo2: 0,
     Atributo3: 0,
     url: '',
     Raridade: 'normal',
     Tryunfo: false,
     submit: true,
   }, () => this.hasTrunfo());
 }

 hasTrunfo = () => {
   const { salvo } = this.state;
   if (salvo.some((get) => get.trunfoSalvo === true)) {
     this.setState({ trunfo: false });
   } else {
     this.setState({ trunfo: true });
   }
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
     salvo,
     trunfo,
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
         hasTrunfo={ trunfo }
         isSaveButtonDisabled={ submit }
         onInputChange={ this.handleChange }
         onSaveButtonClick={ this.limparESalvar }
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
       { salvo.map((salvo2) => (
         <Card
           key={ salvo2.NomeSalvo }
           cardName={ salvo2.NomeSalvo }
           cardDescription={ salvo2.descricaoSalvo }
           cardAttr1={ salvo2.Atributo1Salvo }
           cardAttr2={ salvo2.Atributo2Salvo }
           cardAttr3={ salvo2.Atributo3Salvo }
           cardImage={ salvo2.urlSalvo }
           cardRare={ salvo2.RaridadeSalvo }
           cardTrunfo={ salvo2.TryunfoSalvo }
           hasTrunfo={ salvo2.trunfoSalvo }
         />)) }
     </div>);
 }
}

export default App;
