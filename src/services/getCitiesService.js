import http from "./httpService";

const getCitiesService = () => {
  return http.get("/city");
};

export default getCitiesService;
