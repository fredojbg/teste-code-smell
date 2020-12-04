import axios from "axios";

const api = axios.create({
  baseURL: "https://www.grandesofertas.com.br/api/catalog_system/pub/products/search/",
});

// const api = axios.create({
//   baseURL: "http://localhost:3333",
// });




export default api;
