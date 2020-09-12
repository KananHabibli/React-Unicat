import axios from "../axios";
import authHeader from "./auth-header";

const getPublicContent = () => {
  return axios.get('/api/test/all');
};

const getUserBoard = () => {
  return axios.get("/api/test/user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get("/api/test/mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get("/api/test/admin", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};