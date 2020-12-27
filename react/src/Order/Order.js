import React from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

export class Order extends React.Component {  
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    }
  }

  hide = () => {
    this.setState({ show: false });
  }

  show = () => {
    this.setState({ show: true });
  }

  confirmed = () => {
    this.setState({ show: false });
    this.props.moveToResult();
  }
  
  render() {
    let formFields = [];

    for(let propName in this.props.formData) {
      let item = this.props.formData[propName];
      
      formFields.push(<Form.Group key={propName}>
          <Form.Label>{item.label}</Form.Label>
          <Form.Control type="text" value={item.value} onChange={(e) => this.props.changeFormField(propName, e.target.value)}/>
        </Form.Group>);
    }
    
    return (
      <div>
        <Form>
          {formFields}

          <Button onClick={this.props.moveToCart} variant="warning" type="button" size="lg">
            Back to cart
          </Button>
          &nbsp;
          <Button onClick={this.show} variant="success" type="button" size="lg">
            Submit
          </Button>
        </Form>

        <Modal show={this.state.show} onHide={this.hide}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={this.confirmed}>Save changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}