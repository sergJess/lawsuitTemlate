import React from 'react';
import './inputs-fields.css';
import { InputText, InputTextProps } from 'components/input-text/input-text';

export class InputsField extends React.Component {
  createInputTexts(inputs: Array<InputTextProps>) {
    return inputs.map((input) => (
      <InputText id={input.id} key={input.id} placeholder={input.placeholder} />
    ));
  }
  render() {
    const inputsText = [
      {
        placeholder: 'Jess',
        id: 0,
      },
      {
        placeholder: 'Cloud',
        id: 1,
      },
    ];
    return <div className="inputs-field">{this.createInputTexts(inputsText)}</div>;
  }
}
