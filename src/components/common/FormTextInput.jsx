import PropTypes from "prop-types";

export default function FormTextInput({ name, className, onChange }) {
  return (
    <input
      type="text"
      name={name}
      id={name}
      className={`p-2 border rounded-lg grow ${className}`}
      onChange={onChange}
    />
  );
}

FormTextInput.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
};
