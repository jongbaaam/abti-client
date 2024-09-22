import PropTypes from "prop-types";

export default function FormLabel({ text, className, htmlFor }) {
  return (
    <label className={`mb-2 font-semibold ${className}`} htmlFor={htmlFor}>
      {text}
    </label>
  );
}

FormLabel.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  htmlFor: PropTypes.string,
};
