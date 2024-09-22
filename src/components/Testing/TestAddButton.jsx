import PropTypes from "prop-types";

import IconAdd from "../../assets/icon/ico_add.svg?react";
import Button from "../common/Button";

export default function TestingAddButton({ onClick }) {
  return (
    <div className="flex justify-center items-center">
      <Button
        className="bg-color-blue p-2 rounded-md text-white font-semibold w-fit transition hover:bg-color-blue-hover"
        onClick={onClick}>
        <div className="flex justify-center items-center">
          <IconAdd />
          <span>생성</span>
        </div>
      </Button>
    </div>
  );
}

TestingAddButton.propTypes = {
  onClick: PropTypes.func,
};
