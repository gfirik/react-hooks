import React, { useState, useRef } from "react";
import "../App.css";

interface User {
  name: string;
  age: number;
}

const UseRef: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: "",
    age: 0,
  });

  const nameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitting form...");
    console.log("Name:", nameInputRef.current?.value);
    console.log("Age:", ageInputRef.current?.value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="form-title">React useRef Example</h1>
        <label className="form-label">
          Name:
          <input
            ref={nameInputRef}
            className="form-input"
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            autoComplete="off"
          />
        </label>
        <br />
        <label className="form-label">
          Age:
          <input
            ref={ageInputRef}
            className="form-input"
            type="number"
            name="age"
            value={user.age}
            onChange={handleChange}
          />
        </label>
        <br />
        <button className="form-submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UseRef;
