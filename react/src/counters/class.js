import React from 'react';

export class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      value: 1
    }
  }

  increase = () => {
    if (this.state.value < this.props.max) {
      this.setState({
        value: this.state.value + 1
      });
    }
  }

  decrease = () => {
    if (this.state.value > this.props.min) {
      this.setState({
        value: this.state.value - 1
      });
    }
  }

  changeHandler = (event) => {
    let val = Number(event.target.value);

    if (isNaN(val)) {
      return;
    }
    
    if (val > this.props.max)  {
      val = this.props.max;
    }

    if (val < this.props.min)  {
      val = this.props.min;
    }

    this.setState({
      value: val
    });
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.decrease}>-</button>
        <input type="text" value={this.state.value} onChange={this.changeHandler} />
        <button type="button" onClick={this.increase}>+</button>
      </div>
    );
  }
}