import Greetings from "./Greetings.js";
import LastNameField from "./LastNameField.js";
import FirstNameField from "./FirstNameField.js";
import React, { useState } from "react";
import style from "./style.js";

const validateName = (name) => {
  const regex = /[A-Za-z]{3,}/;

  return !regex.test(name)
    ? "The name must contain at least three letters."
    : "";
};

const SimpleForm = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  return (
    <div style={style.form}>
      <FirstNameField
        onChange={(event) => setFirstName(event.target.value)}
        onBlur={() => setFirstNameError(validateName(firstName))}
        error={firstNameError}
      />
      <LastNameField
        onChange={(event) => setLastName(event.target.value)}
        onBlur={() => setLastNameError(validateName(lastName))}
        error={lastNameError}
      />

      <Greetings firstName={firstName} lastName={lastName} />
    </div>
  );
};

export default SimpleForm;
