import { useState } from "react";

import GuideModal from "../Modal/GuideModal";
import SideBarGuideButton from "./SideBarGuideButton";
import SideBarModuleUrlButton from "./SideBarModuleUrlButton";

import IconTest from "../../assets/icon/ico_test.svg?react";

export default function SideBar() {
  const [isShowGuideModal, setIsShowGuideModal] = useState(false);

  function handleGuideButtonClick() {
    setIsShowGuideModal(true);
  }

  function handleGuideModalClose() {
    setIsShowGuideModal(false);
  }

  return (
    <>
      <div className="w-20 h-full p-2 flex flex-col justify-between items-center border-r-2 border-border-color-gray text-xs font-semibold">
        <div className="p-1 w-[60px] h-[60px]">
          <div className="flex flex-col justify-center items-center text-color-blue">
            <IconTest className="fill-color-blue  mb-1" />
            <span>AB 테스트</span>
          </div>
        </div>
        <div className="h-fit">
          <ul className="w-full h-full flex flex-col justify-center">
            <li>
              <SideBarGuideButton onClick={handleGuideButtonClick} />
            </li>
            <li>
              <SideBarModuleUrlButton />
            </li>
          </ul>
        </div>
      </div>
      <GuideModal isOpen={isShowGuideModal} onClose={handleGuideModalClose} />
    </>
  );
}
