import React from 'react';

function TravelComponent(props) {
  return (
    <form onSubmit={props.handleSubmit} className="formulario">
      <label>
        {' '}
        <input
          type="text"
          name="firstName"
          value={props.firstName}
          placeholder="First Name"
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="lastName"
          value={props.lastName}
          placeHolder="Last Name"
          onChange={props.handleChange}
        />
      </label>

      <label>
        <input
          type="number"
          name="age"
          value={props.age}
          placeHolder="0"
          onChange={props.handleChange}
        />
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={props.handleChange}
          checked={props.gender === 'female'}
        />
        female
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={props.handleChange}
          checked={props.gender === 'male'}
        />
        male
      </label>

      <label>
        Destino:
        <select
          value={props.Location}
          onChange={props.handleChange}
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
          onChange={props.handleChange}
          checked={props.kosher}
        />
        kosher
        <input
          type="checkbox"
          name="vegetarian"
          onChange={props.handleChange}
          checked={props.vegetarian}
        />
        vegetarian
        <input
          type="checkbox"
          name="diabetes"
          onChange={props.handleChange}
          checked={props.diabetes}
        />
        diabetes
      </label>

      <button>Enviar</button>

      <h1>Your Travel</h1>
      <br />
      <h2>
        <p>
          {' '}
          {props.firstName} {props.lastName}
        </p>
        a {props.gender} going {props.Location}
      </h2>
      <br />
      <h3
        style={{
          display:
            props.kosher || props.vegetarian || props.diabetes
              ? 'flex'
              : 'none',
        }}
      >
        just eat
        {props.kosher ? ' jewish' : ' '}
        {props.vegetarian ? ' vegetarian' : ' '}
        {props.diabetes ? ' low carb ' : ' '}
        food
      </h3>
    </form>
  );
}
export default TravelComponent;
