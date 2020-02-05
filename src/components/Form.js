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
      isFun: true,
      gender: '',
      favColor: 'blue',
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
    alert('Nice try!');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="formulario">
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <input
          type="text"
          value={this.state.lastName}
          placeholder="Last Name"
          name="lastName"
          onChange={this.handleChange}
        />
        <textarea value="Texto boneco" />
        <br />
        <label>
          <input
            type="checkbox"
            name="isFun"
            onChange={this.handleChange}
            checked={this.state.isFun}
          />
          gosto de piadas e gatinhos
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="famale"
            onChange={this.handleChange}
            checked={this.state.gender === 'female'}
          />
          female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={this.handleChange}
            checked={this.state.gender === 'male'}
          />
          male
        </label>

        <select
          value={this.state.favColor}
          onChange={this.handleChange}
          name="favColor"
        >
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="black">Black</option>
          <option value="white">White</option>
        </select>

        <h1>
          {this.state.firstName} {this.state.lastName}
        </h1>
        <h2>
          gatinhos {this.state.gender} {this.state.favColor}
        </h2>
        <button>Enviar</button>
      </form>
    );
  }
}

export default Form;
