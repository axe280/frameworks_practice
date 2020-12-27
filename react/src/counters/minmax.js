import React from 'react';
import InputLazy from './Inputlazy.js';
import { Button } from 'react-bootstrap';

export class CounterClass extends React.Component {
  constructor(props) {
    super(props);
  }

  increase = () => {
    this.set(this.props.cnt + 1);
  }

  decrease = () => {
    this.set(this.props.cnt - 1);
  }

  onChange = (value) => {
    let valueNum = parseInt(value);
    if (isNaN(valueNum)) {
      valueNum = this.props.min;
    }

    this.set(valueNum);
  }

  set(val){
    let value = Math.min(Math.max(val, this.props.min), this.props.max);
    this.props.onChange(value);
  }

  render() {
    return (
      <div>
        <Button
          size="sm"
          variant="warning"
          onClick={this.decrease}>-</Button>
        <InputLazy 
          value={this.props.cnt}
          onChange={this.onChange}
        />
        <Button
          size="sm"
          variant="warning"
          onClick={this.increase}>+</Button>
      </div>
    );
  }
}