import { useState } from "react";

import ProjectAddModal from "./ProjectAddModal";
import ProjectAddButton from "./ProjectAddButton";
import ProjectItem from "./ProjectItem";

export default function SideBarProject() {
  const [isShowProjectModal, setIsShowProjectModal] = useState(false);

  function handleProjectAddModalClose() {
    setIsShowProjectModal(false);
  }
  function handleProjectAddModalOpen() {
    setIsShowProjectModal(true);
  }

  return (
    <>
      <div className="w-52 h-full p-2 flex flex-col justify-between items-center border-r border-border-color-gray text-lg font-semibold">
        <ul className="w-full h-full mb-2 border-b flex flex-col items-center overflow-scroll">
          <ProjectItem />
        </ul>
        <div className="w-full">
          <ProjectAddButton onClick={handleProjectAddModalOpen} />
        </div>
      </div>
      <ProjectAddModal
        isOpen={isShowProjectModal}
        onClose={handleProjectAddModalClose}
      />
    </>
  );
}
