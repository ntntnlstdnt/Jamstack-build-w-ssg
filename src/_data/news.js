const axios = require('axios');
require('dotenv').config();

module.exports = async function() {
  try {
    console.log(process.env.API_KEY)
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}&pageSize=5`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
