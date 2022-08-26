import axiosClient from "./axiosClient";

const dataAPI = {
  getData: (params) => {
    const url = "/subjects";
    return axiosClient.get(url, params);
  },
};

export default dataAPI;
