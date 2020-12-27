import React from 'react';
import { Cart } from './Cart/Cart.js';
import { Order } from './Order/Order.js';
import { Result } from './Result/Result.js';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [
        {
          id: 100,
          name: 'Phone 1',
          price: 27000,
          stock: 1,
          val: 1
        },
        {
          id: 101,
          name: 'Phone 2',
          price: 7000,
          stock: 3,
          val: 1
        },
        {
          id: 102,
          name: 'Phone 3',
          price: 13000,
          stock: 10,
          val: 3
        },
        {
          id: 103,
          name: 'Phone 4',
          price: 17000,
          stock: 1,
          val: 1
        },
        {
          id: 104,
          name: 'Phone 5',
          price: 22000,
          stock: 4,
          val: 1
        }
      ],

      formData: {
        name: {
          label: 'Your name',
          value: ''
        },
        email: {
          label: 'Email',
          value: ''
        },
        phone: {
          label: 'Phone',
          value: ''
        },
      },

      activeRout: 'CART',
    }
  }

  setVal = (idx, cnt) => {
    const products = [...this.state.products];
    products[idx] = {...products[idx], val: cnt};
    this.setState({products});
  }

  deleteItem = (idx) => {
    const arr = [...this.state.products];
    arr.splice(idx, 1);
    this.setState({products: arr});
  }

  changeFormField = (name, value) => {
    let formData = {...this.state.formData};
    formData[name] = {...formData[name], value};
    this.setState({ formData })
  }

  moveToCart = () => {
    this.setState({ activeRout: 'CART' });
  }

  moveToOrder = () => {
    this.setState({ activeRout: 'ORDER' });
  }

  moveToResult = () => {
    this.setState({ activeRout: 'RESULT' });
  }
  
  render() {
    let page;

    switch(this.state.activeRout) {
      case 'CART': 
        page = <Cart
          products={this.state.products}
          onChangeProduct={this.setVal}
          onRemoveItem={this.deleteItem}
          moveToOrder={this.moveToOrder}
        />
        break;
      case 'ORDER': 
        page = <Order 
          formData={this.state.formData}
          moveToCart={this.moveToCart}
          moveToResult={this.moveToResult}
          changeFormField={this.changeFormField}
        />
        break;
      case 'RESULT': 
        page = <Result 
          formData={this.state.formData}
        />
        break;
      default:
        page = <div>404</div>
    }
    
    
    return (
      <Container>
        { page }
      </Container>
    );
  }
};