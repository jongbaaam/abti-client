import axios from "axios";

export async function validateProjectUrl(projectUrl) {
  const { data: projectUrlValidationResult } = await axios.get(
    `${import.meta.env.VITE_SERVER_URL}/users/project/url-validation/?projectUrl=${projectUrl}`,
    {
      withCredentials: true,
    },
  );

  return projectUrlValidationResult;
}

export async function registerProjectByUserId({ userId, ...formData }) {
  const { data: registeredResult } = await axios.post(
    `${import.meta.env.VITE_SERVER_URL}/users/${userId}/projects`,
    {
      ...formData,
    },
    {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    },
  );

  return registeredResult;
}
