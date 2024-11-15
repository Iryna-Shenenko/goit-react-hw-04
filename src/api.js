import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com/";
const key = "HD8a7nzqSCIuZgWulcZb4uNBftEJwJewIYNsf0KFCJg";

export const fetchArticlesWithTopic = async (topic, page = 1) => {
  const response = await axios.get(
    `/search/photos?page=${page}&query=${topic}}&client_id=${key}`
  );
  return response.data.results;
};
