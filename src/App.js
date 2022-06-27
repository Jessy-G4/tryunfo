import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
// Jessy do futuro, lembrete, tem um estado e uma prop chamada submit tu comentou ela para corrigir erro do lint, quando for usar, não esquece de descomentar!
// Jessy do futuro, lembrete, tem um estado e uma prop chamada submit tu comentou ela para corrigir erro do lint, quando for usar, não esquece de descomentar!
// Jessy do futuro, lembrete, tem um estado e uma prop chamada submit tu comentou ela para corrigir erro do lint, quando for usar, não esquece de descomentar!
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
      Raridade: '',
      Tryunfo: '',
    };
  }

isSaveButtonDisabled = () => true

 handleChange = (evento) => {
   const { name, type, checked, value } = evento.target;
   this.setState({ [name]: type === 'checkbox' ? checked : value });
 }

 teste = () => {
   const arrayTodosOsEstados = Object.values(this.state).map((get) => get);
   const filtrando = arrayTodosOsEstados.filter((get) => get.length > 1);
   const sete = 7;
   if (filtrando.length === sete) this.isSaveButtonDisabled = () => false;
   else this.isSaveButtonDisabled = () => true;
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
         isSaveButtonDisabled={ this.isSaveButtonDisabled }
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
