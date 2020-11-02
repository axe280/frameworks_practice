import React from 'react';

function WarningText(props) {
  if (!props.warn) {
    return null;
  }
  
  return (
    <div>Warning!</div>
  );
}

export class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showWarning: false
    };
  }

  handleClick = () => {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleClick}>
          {this.state.showWarning ? 'Скрыть' : 'Показать'}
        </button>
        <WarningText  warn={this.state.showWarning} />
      </div>
    );
  }
}