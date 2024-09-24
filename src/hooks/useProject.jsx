import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSelectedProjectStore, useUserStore } from "../store/store";
import { getProjectListByUserId } from "../apis/projectsApi";

export default function useProject() {
  const [projectList, setProjectList] = useState();
  const navigate = useNavigate();

  const { userInfo } = useUserStore(state => state);
  const { selectedProject, setSelectedProject } = useSelectedProjectStore(
    state => state,
  );

  async function handleProjectList() {
    const { userId } = userInfo;

    try {
      const projectListByUserId = await getProjectListByUserId(userId);

      setProjectList(projectListByUserId);

      if (projectListByUserId.length !== 0 && !selectedProject) {
        setSelectedProject(projectListByUserId[0]._id);

        navigate(`${projectListByUserId[0]._id}`);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return { projectList, handleProjectList };
}
