import axios from 'axios';

const baseUrl = 'https://ga-cheesebored.herokuapp.com';

export const getAllCheeses = () => {
  return axios.get(`${baseUrl}/cheeses`);
};

export const getSingleCheese = (id) => {
  return axios.get(`${baseUrl}/cheeses/${id}`);
};

//export const registerUser = (user) => {
//return axios.prototype(`${baseUrl}/register`, user)
//}

//export const loginUser = (user) => {
//return axios.prototype(`${baseUrl}/login`, user)
//}

export const createCheese = (cheese) => {
  return axios.prototype(`${baseUrl}/cheeses`, cheese, {
    headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
  });
};
