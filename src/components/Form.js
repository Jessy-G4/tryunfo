import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <>
        <input
          type="text"
          data-testid="name-input"
          name="Nome"
          placeholder="Nome da carta"
        />
        <textarea data-testid="description-input" name="descrição" />
        <input
          type="number"
          data-testid="attr1-input"
          name="Atributo1"
          placeholder="Insira o Primeiro Atributo"
        />
        <input
          type="number"
          data-testid="attr2-input"
          name="Atributo2"
          placeholder="Insira o Segundo Atributo"
        />
        <input
          type="number"
          data-testid="attr3-input"
          name="Atributo3"
          placeholder="Insira o Terceiro Atributo"
        />
        <input
          type="image"
          data-testid="image-input"
          name="Foto"
          placeholder="Insira o URL da imagem"
          alt="Imagem Definida"
        />
        <select name="Raridade" data-testid="rare-input">
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <input
          type="checkbox"
          data-testid="trunfo-input"
          name="Tryunfo"
        />
        <button type="submit" data-testid="save-button">Salvar Carta</button>
      </>
    );
  }
}

export default Form;
