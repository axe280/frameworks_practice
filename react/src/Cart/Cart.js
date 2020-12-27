import React from 'react';
import {CounterClass as Counter} from '../counters/minmax.js';
import { Button, Table } from 'react-bootstrap';

export class Cart extends React.Component {  
  getTotal() {
    return this.props.products.reduce((acc, item) => {
      return acc + item.val * item.price;
    }, 0);
  }
  
  render() {
    const rows = this.props.products.map((item, idx) => {
      return (
        <tr key={item.id}>
          <td>{idx + 1}</td>
          <td>{item.name}</td>
          <td>
            <Counter 
              min={1}
              max={item.stock} 
              cnt={item.val}
              onChange={(value) => this.props.onChangeProduct(idx, value)}
            /> 
          </td>
          <td>{item.price * item.val}</td>
          <td>
            <Button
              variant="danger"
              size="sm"
              onClick={() => this.props.onRemoveItem(idx)}
            >Delete</Button>
          </td>
        </tr>
      )
    });

    return (
      <div>
        <Table striped bordered variant="dark">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Count</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4} style={{textAlign: "right"}}>
                Total: {this.getTotal()}
              </td>
            </tr>
          </tfoot>
        </Table>

        <Button
          size="lg"
          variant="success"
          onClick={this.props.moveToOrder}
        >Order btn</Button>
      </div>
    );
  }
}