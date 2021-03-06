const API_URL = "https://high-service-api.herokuapp.com";

// "http://localhost:3000"
// "https://high-service-api.herokuapp.com"

import axios from "axios";

export default {
  async buscarTodos() {
    return axios.get(API_URL + "/clientes").then((response) => response.data);
  },

  async salvar(cliente) {
    return axios
      .post(API_URL + "/clientes", cliente)
      .then((response) => response.data);
  },

  async editar(cliente) {
    return axios
      .put(API_URL + "/clientes", cliente)
      .then((response) => response.data);
  },

  async ativarInativar(cliente) {
    return axios
      .put(API_URL + "/clientes/ativarInativar", cliente)
      .then((response) => response.data);
  },
};
