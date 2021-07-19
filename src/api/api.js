import * as axios from "axios";
const baseUrl = `http://alel.sport-market.kz/api/`;

export const catalogue = {
  getCategory(){
    return axios.get(`${baseUrl}categories`).then(response => {
      return response.data;
    }).catch(() => {
      return "error";
    });
  },

  getCurrentCategory(categoryId){
    return axios.get(`${baseUrl}categories/get_children?category_id=${categoryId}`).then(response => {
      return response.data;
    }).catch(() => {
      return 'error';
    });
  }
}

export const products = {
  getProductsByCategory(categoty_id) {
    return axios.get(`${baseUrl}products?categoty_id=${categoty_id}`).then(response => {
      return response.data;
    }).catch(() => {
      return 'error';
    });
  }
}

export const ordering = {
  sendBasketTo(form) {
    return axios.post(`${baseUrl}orders`, form).then(response => {
      return response.data;
    }).catch(() => {
      return 'error';
    })
  }
}