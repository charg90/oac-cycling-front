import axios from "axios";
import React, { useRef, useState } from "react";

const RegisterForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3002/api/registration",
        formData
      );
      console.log(response);
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form className="flex flex-col" onSubmit={handleSubmit} ref={formRef}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          onChange={handleInputChange}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          onChange={handleInputChange}
        />
        <label htmlFor="age">Age</label>
        <input type="text" name="age" id="age" onChange={handleInputChange} />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleInputChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleInputChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
