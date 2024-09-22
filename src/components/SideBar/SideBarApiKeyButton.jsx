import { useUserStore } from "../../store/store";

import SideBarButton from "../common/SideBarButton";
import IconKey from "../../assets/icon/ico_key.svg?react";

export default function SideBarApiKeyButton() {
  const { apiKey } = useUserStore(state => state.userInfo);

  async function handleApiKeyButtonClick() {
    try {
      await navigator.clipboard.writeText(apiKey);
    } catch (error) {
      console.error("API 키 복사 실패");
    }
  }

  return (
    <SideBarButton onClick={handleApiKeyButtonClick}>
      <>
        <IconKey className="fill-text-color-gray mb-1" />
        <span>인증 키</span>
      </>
    </SideBarButton>
  );
}
