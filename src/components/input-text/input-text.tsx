import React from 'react';
import './input-text.css';
type InputTextProps = {
  placeholder: string;
};
type InputTextState = {
  value: string;
};
export class InputText extends React.Component<InputTextProps, InputTextState> {
  constructor(props: InputTextProps) {
    super(props);
    this.state = {
      value: '',
    };
  }
  render() {
    return <input placeholder={this.props.placeholder} />;
  }
}
