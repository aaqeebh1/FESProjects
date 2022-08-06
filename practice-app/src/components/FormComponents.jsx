import React from "react";

function FormComponent (props) {


return (
    <main>
      <form className="app">
        <input
          type="text"
          value={props.data.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={props.handleChange}
        />

        <input
          type="text"
          value={props.data.lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={props.handleChange}
        />
        <input
          type="number"
          value={props.data.age}
          name="age"
          placeholder="Age"
          onChange={props.handleChange}
        />
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.data.gender === "male"}
            onChange={props.handleChange}
          />
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.data.gender === "female"}
            onChange={props.handleChange}
          />
          Female
        </label>
        <br />
        <select
          name="destination"
          value={props.data.destination}
          onChange={props.handleChange}
        >
          <option value="" selected disabled>
            Select Your destination
          </option>
          <option value="London">London</option>
          <option value="New York">New York</option>
          <option value="Tokyo">Tokyo</option>
          <option value="Bangkok">Bangkok</option>
        </select>
        <br />
        <label>
          <input
            type="checkbox"
            onChange={props.handleChange}
            checked={props.data.isVegan}
            name="isVegan"
          />
          Vegan
        </label>
        <label>
          <input
            type="checkbox"
            onChange={props.handleChange}
            checked={props.data.isHalal}
            name="isHalal"
          />
          Halal
        </label>
        <label>
          <input
            type="checkbox"
            onChange={props.handleChange}
            checked={props.data.isKosher}
            name="isKosher"
          />
          Kosher
        </label>
        <label>
          <input
            type="checkbox"
            onChange={props.handleChange}
            checked={props.data.noPrefrence}
            name="noPrefrence"
          />
          No Prefrence
        </label>
        <br />
        <button>Submit</button>
        <br />
        <br />
        <h1>Entered information:</h1>
        <p>
          Your name: {props.data.firstName} {props.data.lastName}
        </p>
        <p>Your age: {props.data.age}</p>
        <p>Your gender: {props.data.gender}</p>
        <p>Your destination: {props.data.destination}</p>
        <p>Your dietary restrictions:</p>
        <p> {props.data.isVegan ? "Vegan" : ""}</p>
        <p> {props.data.isHalal ? "Halal" : ""}</p>
        <p> {props.data.isKosher ? "Kosher" : ""}</p>
        <p> {props.data.noPrefrence ? "Has no prefrence" : ""}</p>
      </form>
    </main>
  );
}

export default FormComponent