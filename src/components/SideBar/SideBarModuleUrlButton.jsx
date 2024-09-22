import SideBarButton from "../common/SideBarButton";
import IconModule from "../../assets/icon/ico_module.svg?react";

export default function SideBarModuleUrlButton() {
  async function handleModuleUrlButtonClick() {
    try {
      await navigator.clipboard.writeText("모듈 URL");
    } catch (error) {
      console.error("API 키 복사 실패");
    }
  }

  return (
    <SideBarButton onClick={handleModuleUrlButtonClick}>
      <>
        <IconModule className="fill-text-color-gray mb-1" />
        <span className="text-">모듈 URL</span>
      </>
    </SideBarButton>
  );
}
