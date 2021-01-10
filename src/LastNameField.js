import TextField from "./TextField.js";

const LastNameField = ({ ...rest }) => (
  <TextField name="lastName" label="Last Name:" {...rest} />
);

export default LastNameField;
