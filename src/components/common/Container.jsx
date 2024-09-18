import PropTypes from "prop-types";

export default function Container({ children }) {
  return (
    <div className="px-6 py-4 w-full h-container-height flex justify-center">
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.element.isRequired,
};
