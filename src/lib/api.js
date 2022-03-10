import axios from 'axios';

// const baseUrl = 'https://ga-cheesebored.herokuapp.com';

const hobbyUrl = 'https://api.api-ninjas.com/v1/hobbies?category=';
const quoteUrl = 'https://api.api-ninjas.com/v1/quotes?category=';

export const getQuoteData = () => {
  console.log(process.env.REACT_APP_API_KEY);
  return axios({
    method: 'get',
    url: quoteUrl,
    headers: {
      'X-Api-Key': 'XIB7aRLPEVWPu4AGWbMP1Q==r1lIE35dLfkuvXvA',
    },
  });
};

export const getHobbyData = () => {
  console.log(process.env.REACT_APP_API_KEY);
  return axios({
    method: 'get',
    url: hobbyUrl,
    headers: {
      'X-Api-Key': 'XIB7aRLPEVWPu4AGWbMP1Q==r1lIE35dLfkuvXvA',
    },
  });
};

export const getAllQuotes = () => {
  return axios.get(`${quoteUrl}love`, {
    headers: {
      'X-Api-Key': 'XIB7aRLPEVWPu4AGWbMP1Q==r1lIE35dLfkuvXvA',
    },
  });
};

export const getAllHobbies = () => {
  return axios.get(`${hobbyUrl}general`, {
    headers: {
      'X-Api-Key': 'XIB7aRLPEVWPu4AGWbMP1Q==r1lIE35dLfkuvXvA',
    },
  });
};

// export const getSingleCheese = (id) => {
//   return axios.get(`${baseUrl}/cheeses/${id}`);
// };

export const registerUser = (user) => {
  return axios.prototype(`${quoteUrl}/register`, user);
};

export const loginUser = (user) => {
  return axios.prototype(`${quoteUrl}/login`, user);
};

// export const createCheese = (cheese) => {
//   return axios.prototype(`${baseUrl}/cheeses`, cheese, {
//     headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
//   });
// };
