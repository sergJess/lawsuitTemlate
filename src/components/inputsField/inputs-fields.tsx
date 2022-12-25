import React from 'react';
import './inputs-fields.css';
type InputsFieldProps = {
  childrenInputs: Array<JSX.Element>;
};
export class InputsField extends React.Component<InputsFieldProps> {
  constructor(props: InputsFieldProps) {
    super(props);
  }
  render() {
    return <div className="inputs-field"></div>;
  }
}
