import React from 'react';
import './input-text.css';
export type InputTextProps = {
  placeholder: string;
  id: number;
};
type InputTextState = {
  value: string;
};
export class InputText extends React.Component<InputTextProps, InputTextState> {
  private inputRef = React.createRef<HTMLInputElement>();
  constructor(props: InputTextProps) {
    super(props);
    this.state = {
      value: '',
    };
    this.changingValue = this.changingValue.bind(this);
  }
  changingValue() {
    const input = this.inputRef.current;
    if (input && input.value) {
      this.setState({ value: input.value });
    }
  }
  render() {
    return (
      <input
        ref={this.inputRef}
        onChange={this.changingValue}
        placeholder={this.props.placeholder}
      />
    );
  }
}
