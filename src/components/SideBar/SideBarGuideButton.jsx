import PropTypes from "prop-types";

import SideBarButton from "../common/SideBarButton";
import IconGuide from "../../assets/icon/ico_guide.svg?react";

export default function SideBarGuideButton({ onClick }) {
  return (
    <SideBarButton onClick={onClick}>
      <>
        <IconGuide className="fill-text-color-gray mb-1" />
        <span className="text-">진행 방법</span>
      </>
    </SideBarButton>
  );
}

SideBarGuideButton.propTypes = {
  onClick: PropTypes.func,
};
