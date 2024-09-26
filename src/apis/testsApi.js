import axios from "axios";

export async function getTestListByProjectId({ userId, projectId }) {
  const { data: response } = await axios.get(
    `${import.meta.env.VITE_SERVER_URL}/users/${userId}/projects/${projectId}/tests`,
    {
      withCredentials: true,
    },
  );

  return response.testListByProjectId;
}

export async function createTestByProjectId({
  userId,
  projectId,
  testFormData,
}) {
  await axios.post(
    `${import.meta.env.VITE_SERVER_URL}/users/${userId}/projects/${projectId}/tests`,
    {
      testFormData,
    },
    {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    },
  );
}
