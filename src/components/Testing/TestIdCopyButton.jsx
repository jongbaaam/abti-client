import PropTypes from "prop-types";

import IcoCopy from "../../assets/icon/ico_copy.svg?react";
import Button from "../common/Button";

export default function TestIdCopyButton({ onClick }) {
  return (
    <Button
      onClick={onClick}
      className="bg-text-color-gray-light w-20 h-20 flex justify-center items-center hover:bg-[#909090]">
      <IcoCopy className="fill-white" />
    </Button>
  );
}

TestIdCopyButton.propTypes = {
  onClick: PropTypes.func,
};
