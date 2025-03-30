import React from "react";

const InputField = ({ type = "text", name, placeholder, value, onChange }) => (
  <input
    className="text"
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

const RadioButton = ({ name, value, checked, onChange, label }) => (
  <label>
    <input
      className="radiobutton"
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
    />
    {label}
  </label>
);

const SelectField = ({ name, value, onChange, options }) => (
  <select
    className="destination-input"
    name={name}
    value={value}
    onChange={onChange}
  >
    <option value="">-- Please Choose a destination --</option>
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);

const Checkbox = ({ name, checked, onChange, label }) => (
  <div>
    <input type="checkbox" name={name} checked={checked} onChange={onChange} />
    <span>{label}</span>
  </div>
);
function FormComponent(props) {
  return (
    <main>
      <h1>Sample form</h1>
      <form className="inputForm">
        <InputField
          name="firstName"
          placeholder="First Name"
          value={props.firstName}
          onChange={props.handleChange}
        />
        <br />
        <InputField
          name="lastName"
          placeholder="Last Name"
          value={props.lastName}
          onChange={props.handleChange}
        />
        <br />
        <InputField
          name="age"
          placeholder="Age"
          value={props.age}
          onChange={props.handleChange}
        />
        <br />
        <br />
        <RadioButton
          name="gender"
          value="male"
          checked={props.gender === "male"}
          onChange={props.handleChange}
          label="Male"
        />
        <br />
        <RadioButton
          name="gender"
          value="female"
          checked={props.gender === "female"}
          onChange={props.handleChange}
          label="Female"
        />
        <br />
        <label className="destination-header">Select your destination</label>
        <br />
        <SelectField
          name="destination"
          value={props.destination}
          onChange={props.handleChange}
          options={["Thailand", "Japan", "Brazil"]}
        />
        <br />
        <br />
        <label className="restrictions-title">Dietary restrictions:</label>
        <br />
        <div className="restrictions">
          <Checkbox
            name="nutsFree"
            checked={props.nutsFree}
            onChange={props.handleChange}
            label="Nuts free"
          />
          <Checkbox
            name="lactoseFree"
            checked={props.lactoseFree}
            onChange={props.handleChange}
            label="Lactose free"
          />
          <Checkbox
            name="isVegan"
            checked={props.isVegan}
            onChange={props.handleChange}
            label="Vegan"
          />
        </div>
        <button className="submit">Submit</button>
      </form>
      <hr />
      <div className="entered-info">
        <h2>Entered information:</h2>
        <p>
          Your name: {props.firstName} {props.lastName}
        </p>
        <p>Your age: {props.age}</p>
        <p>Your gender: {props.gender}</p>
        <p>Your destination: {props.destination}</p>
        <p>Your dietary restrictions:</p>
        <div className="restrictions">
          <span>**Nuts free: {props.nutsFree ? "Yes" : "No"}</span> <br />
          <span>**Lactose free: {props.lactoseFree ? "Yes" : "No"}</span> <br />
          <span>**Vegan meal: {props.isVegan ? "Yes" : "No"}</span>
        </div>
      </div>
    </main>
  );
}

export default FormComponent;

