import React from 'react';
import PropTypes from 'prop-types';
// Jessy do futuro, lembrete, tem uma prop chamada HasTrunfo tu comentou ela para corrigir erro do lint, quando for usar, não esquece de descomentar!
// Jessy do futuro, lembrete, tem uma prop chamada HasTrunfo tu comentou ela para corrigir erro do lint, quando for usar, não esquece de descomentar!
// Jessy do futuro, lembrete, tem uma prop chamada HasTrunfo tu comentou ela para corrigir erro do lint, quando for usar, não esquece de descomentar!
// Jessy do futuro, lembrete, tem uma prop chamada HasTrunfo tu comentou ela para corrigir erro do lint, quando for usar, não esquece de descomentar!
class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      //   hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <>
        <input
          type="text"
          data-testid="name-input"
          name="Nome"
          placeholder="Nome da carta"
          value={ cardName }
          onChange={ onInputChange }
        />
        <textarea
          data-testid="description-input"
          name="descrição"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <input
          type="number"
          data-testid="attr1-input"
          name="Atributo1"
          placeholder="Insira o Primeiro Atributo"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <input
          type="number"
          data-testid="attr2-input"
          name="Atributo2"
          placeholder="Insira o Segundo Atributo"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <input
          type="number"
          data-testid="attr3-input"
          name="Atributo3"
          placeholder="Insira o Terceiro Atributo"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <input
          type="text"
          data-testid="image-input"
          alt="Imagem Definida"
          placeholder="Insira o URL da imagem"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <select
          name="Raridade"
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <input
          type="checkbox"
          data-testid="trunfo-input"
          name="Tryunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar Carta

        </button>
      </>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  //   hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
