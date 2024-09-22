import PropTypes from "prop-types";

import Button from "../common/Button";
import IconAdd from "../../assets/icon/ico_add.svg?react";

export default function ProjectAddButton({ onClick }) {
  return (
    <Button
      className="p-1 w-full h-10 text-sm rounded-md transition hover:bg-color-black-5 hover:font-bold"
      onClick={onClick}>
      <div className="flex justify-center items-center">
        <IconAdd className="fill-text-color-gray-light mr-1 w-5 h-5" />
        <span>프로젝트 추가</span>
      </div>
    </Button>
  );
}

ProjectAddButton.propTypes = {
  onClick: PropTypes.func,
};
