import { useEffect, useState } from "react";

import { useSelectedProjectStore } from "../../store/store";
import useProject from "../../hooks/useProject";
import ProjectAddModal from "./ProjectAddModal";
import ProjectAddButton from "./ProjectAddButton";
import ProjectItem from "./ProjectItem";

export default function SideBarProject() {
  const [isShowProjectModal, setIsShowProjectModal] = useState(false);
  const { projectList, handleProjectList } = useProject();

  const { selectedProject } = useSelectedProjectStore(state => state);

  useEffect(() => {
    handleProjectList();
  }, [isShowProjectModal]);

  function handleProjectAddModalClose() {
    setIsShowProjectModal(false);
  }
  function handleProjectAddModalOpen() {
    setIsShowProjectModal(true);
  }

  const projectItemList = (projectList ?? []).map(project => {
    return (
      <ProjectItem
        key={project._id}
        data={project}
        isActive={project._id === selectedProject}
      />
    );
  });

  return (
    <>
      <div className="min-w-52 h-full p-2 flex flex-col justify-between items-center border-r border-border-color-gray text-lg font-semibold">
        <ul className="w-full h-full mb-2 border-b flex flex-col items-center overflow-scroll">
          {projectItemList}
        </ul>
        <div className="w-full">
          <ProjectAddButton onClick={handleProjectAddModalOpen} />
        </div>
      </div>
      <ProjectAddModal
        key={Math.random()}
        isOpen={isShowProjectModal}
        onClose={handleProjectAddModalClose}
      />
    </>
  );
}
