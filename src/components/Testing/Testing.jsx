import TestingInput from "./TestingInput";
import TestingAddButton from "./TestAddButton";
import TestItemList from "./TestItemList";
import TestAddModal from "./TestAddModal";
import { useState } from "react";

export default function Testing() {
  const [isShowTestAddModal, setIsShowTestAddModal] = useState(false);

  function handleTestAddButtonClick() {
    setIsShowTestAddModal(true);
  }
  function handleTestAddModalClose() {
    setIsShowTestAddModal(false);
  }

  return (
    <>
      <section className="w-full h-full flex flex-col items-center">
        <div className="w-full h-14 p-2 flex items-center border-b">
          <TestingInput />
          <TestingAddButton onClick={handleTestAddButtonClick} />
        </div>
        <div className="w-full h-14 p-2 flex items-center border-b">
          <div className="w-full h-full flex items-center p-2 bg-color-black-5 rounded-md">
            <p className="text-text-color-gray-light font-medium">
              총 1개의 테스트가 검색되었습니다.
            </p>
          </div>
        </div>
        <div className="w-full grow overflow-hidden">
          <TestItemList />
        </div>
      </section>
      <TestAddModal
        isOpen={isShowTestAddModal}
        onClose={handleTestAddModalClose}
      />
    </>
  );
}
