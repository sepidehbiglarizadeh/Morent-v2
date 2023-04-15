import http from "./httpService";

const getAllTypesService = () => {
  return http.get("/car-type");
};

export default getAllTypesService;
