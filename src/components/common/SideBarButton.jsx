import PropTypes from "prop-types";

import Button from "./Button";

export default function SideBarButton({ children, onClick }) {
  return (
    <Button
      className="p-1 w-[60px] h-[60px] rounded-lg transition hover:bg-color-black-5 hover:font-bold"
      onClick={onClick}>
      <div className="flex flex-col justify-center items-center">
        {children}
      </div>
    </Button>
  );
}

SideBarButton.propTypes = {
  children: PropTypes.element,
  onClick: PropTypes.func,
};
