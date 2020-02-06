import React, { Component } from 'react';

// https://reactjs.org/docs/forms.html
// https://codepen.io/gaearon/pen/VmmPgp?editors=0010
// formik
class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      gender: '',
      Location: 'Nowhere',
      vegetarian: false,
      kosher: false,
      diabetes: false,
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
      <form onSubmit={this.handleSubmit} className="formulario">
        <label>
          {' '}
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            placeHolder="Last Name"
            onChange={this.handleChange}
          />
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={this.handleChange}
            checked={this.state.gender === 'female'}
          />
          female
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={this.handleChange}
            checked={this.state.gender === 'male'}
          />
          male
        </label>

        <label>
          Destino:
          <select
            value={this.state.Location}
            onChange={this.handleChange}
            name="Location"
          >
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europa">Europa</option>
          </select>
        </label>

        <label>
          Alimentação:
          <input
            type="checkbox"
            name="kosher"
            onChange={this.handleChange}
            checked={this.state.kosher}
          />
          kosher
          <input
            type="checkbox"
            name="vegetarian"
            onChange={this.handleChange}
            checked={this.state.vegetarian}
          />
          vegetarian
          <input
            type="checkbox"
            name="diabetes"
            onChange={this.handleChange}
            checked={this.state.diabetes}
          />
          diabetes
        </label>

        <button>Enviar</button>

        <h1>Your Travel</h1>
        <br />
        <h2>
          <p>
            {' '}
            {this.state.firstName} {this.state.lastName}
          </p>
          a {this.state.gender} going {this.state.Location}
        </h2>
        <br />
        <h3
          style={{
            display:
              this.state.kosher || this.state.vegetarian || this.state.diabetes
                ? 'flex'
                : 'none',
          }}
        >
          just eat
          {this.state.kosher ? ' jewish' : ' '}
          {this.state.vegetarian ? ' vegetarian' : ' '}
          {this.state.diabetes ? ' low carb ' : ' '}
          food
        </h3>
      </form>
    );
  }
}

export default Form;
