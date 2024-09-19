import PropTypes from "prop-types";

export default function Button({ text, onClick, className, children }) {
  return (
    <button type="button" className={className} onClick={onClick}>
      {text ?? children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.element,
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
