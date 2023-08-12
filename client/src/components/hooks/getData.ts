import axios from "axios";

export const getData = (loading: (value: boolean) => void) => {
  return axios
    .get("http://localhost:8080/data")
    .then((response) => {
      loading(true);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};
