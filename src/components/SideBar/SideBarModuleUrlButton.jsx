import { toast } from "react-toastify";

import SideBarButton from "../common/SideBarButton";
import IconModule from "../../assets/icon/ico_module.svg?react";

export default function SideBarModuleUrlButton() {
  async function handleModuleUrlButtonClick() {
    try {
      await navigator.clipboard.writeText("http://localhost:3000/abti/module");
      toast.success("스크립트가 복사 되었습니다!");
    } catch (error) {
      toast.error("복사 과정에서 에러가 발생하였습니다.");
    }
  }

  return (
    <SideBarButton onClick={handleModuleUrlButtonClick}>
      <>
        <IconModule className="fill-text-color-gray mb-1" />
        <span className="text-">스크립트</span>
      </>
    </SideBarButton>
  );
}
