import React from 'react';
import { Table } from 'react-bootstrap';

export class Result extends React.Component {
  render() {
    return (
      <Table striped bordered variant="dark">
        <tbody>
          <tr>
            <td>name</td>
            <td>{this.props.formData.name.value}</td>
          </tr>
          <tr>
            <td>email</td>
            <td>{this.props.formData.email.value}</td>
          </tr>
          <tr>
            <td>name</td>
            <td>{this.props.formData.phone.value}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
};