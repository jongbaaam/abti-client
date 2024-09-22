import PropTypes from "prop-types";

import IcoDelete from "../../assets/icon/ico_Delete.svg?react";
import Button from "../common/Button";

export default function TestDeleteButton({ onClick }) {
  return (
    <Button
      onClick={onClick}
      className="bg-color-red w-20 h-20 flex justify-center items-center hover:bg-[#E55D3C]">
      <IcoDelete className="fill-white" />
    </Button>
  );
}

TestDeleteButton.propTypes = {
  onClick: PropTypes.func,
};
