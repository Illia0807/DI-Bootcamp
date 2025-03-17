// import axios from "axios";
const axios = require("axios");

let fetchPosts = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data;
  } catch (error) {
    console.error({ error: "Error fetching posts:!!in ex3" });
  }
};
module.exports = { fetchPosts };

// axios.post('/user', {
//         firstName: 'Fred',
//         lastName: 'Flintstone'
//       })
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
