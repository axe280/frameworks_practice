import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  nativeInput = React.createRef();

  componentDidUpdate(prevProps, prevState) {
    const inp = this.nativeInput.current;

    if (prevProps.value !== this.props.value || 
      this.props.value != inp.value) {
      inp.value = this.props.value;
    }
  }

  checkChange(evt){
    let value = evt.target.value;

    if (this.props.value.toString() !== value) {
      this.props.onChange(value);
    }
  }

  render() {

    return (
      <input type="text" 
            {...this.props.nativeProps}
            defaultValue={this.props.value}
            onBlur={(evt) => this.checkChange(evt)}
            ref={this.nativeInput}
      />
    );
  }
}