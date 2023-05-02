import axios from "axios";
const projectsService = axios.create({
  baseURL: "http://localhost:3000/api/projects/",
  params: {
    // per_page: 12,
  },
});
export const getProjectsList = async () => {
  const { data } = await projectsService.get();
  return data;
};
