import React, { Component } from 'react';
import TravelComponent from './TravelComponent';

// https://reactjs.org/docs/forms.html
// https://codepen.io/gaearon/pen/VmmPgp?editors=0010
// formik

// https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

class TravelContainer extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      gender: '',
      age: '1',
      Location: 'Nowhere',
      dieta: {
        vegetarian: false,
        kosher: false,
        diabetes: false,
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === 'checkbox'
      ? this.setState({ [name]: checked })
      : this.setState({
          [name]: value,
        });
  }

  handleSubmit(event) {
    alert('Nice fly!');
  }

  render() {
    return (
      // se usar em vez de data={this.state} {...this.state}
      <TravelComponent {...this.state} handleChange={this.handleChange} />
    );
  }
}

export default TravelContainer;
