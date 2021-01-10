import TextField from "./TextField.js";

const FirstNameField = ({ ...rest }) => (
  <TextField name="firstName" label="First Name:" {...rest} />
);

export default FirstNameField;
