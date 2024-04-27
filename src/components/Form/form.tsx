import { FormEvent, useState } from "react";

export const Form = () => {
  const [firstName, setfirstName] = useState("");
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(firstName);
  };
  const handleFirstName = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setfirstName(event.currentTarget.value);
  };

  return (
    <div>
      <h2>Form</h2>
      <p>Form input value</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={handleFirstName}
          />
        </label>
      </form>
    </div>
  );
};
