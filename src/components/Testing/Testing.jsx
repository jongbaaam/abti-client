import { useEffect, useState } from "react";

import useTest from "../../hooks/useTest";
import { useSelectedProjectStore } from "../../store/store";
import TestingInput from "./TestingInput";
import TestingAddButton from "./TestAddButton";
import TestItemList from "./TestItemList";
import TestAddModal from "./TestAddModal";

export default function Testing() {
  const [isShowTestAddModal, setIsShowTestAddModal] = useState(false);
  const { testList, handleTestList } = useTest();
  const { selectedProject } = useSelectedProjectStore(state => state);

  useEffect(() => {
    handleTestList(selectedProject);
  }, [selectedProject, isShowTestAddModal]);
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
              {`총 ${(testList ?? []).length}개의 테스트가 검색되었습니다.`}
            </p>
          </div>
        </div>
        <div className="w-full grow overflow-hidden">
          <TestItemList tests={testList ?? []} />
        </div>
      </section>
      <TestAddModal
        key={Math.random()}
        isOpen={isShowTestAddModal}
        onClose={handleTestAddModalClose}
      />
    </>
  );
}
