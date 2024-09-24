import { useState } from "react";

import { useUserStore } from "../store/store";
import { getTestListByProjectId } from "../apis/testsApi";

export default function useTest() {
  const [testList, setTestList] = useState();
  const { userInfo } = useUserStore(state => state);

  async function handleTestList(projectId) {
    const { userId } = userInfo;

    try {
      const testListByProjectId = await getTestListByProjectId({
        userId,
        projectId,
      });

      setTestList(testListByProjectId);
    } catch (error) {
      console.error(error);
    }
  }

  return { testList, handleTestList };
}
