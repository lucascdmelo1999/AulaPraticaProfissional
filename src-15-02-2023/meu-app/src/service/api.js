import axios from "axios";

const ApiConsultaNome = {
    getConsultaNome(nome) {
      return axios.get(`http://localhost:8080/consultanome/${nome}`);
    }
  }

export default ApiConsultaNome;