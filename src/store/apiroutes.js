import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default {
  login(user) {
    return Vue.axios.post(
      "https://y38x8sqx2b.execute-api.us-east-2.amazonaws.com/test/auth",
      user
    );
  },
  signup(user) {
    return Vue.axios.put(
      "https://y38x8sqx2b.execute-api.us-east-2.amazonaws.com/test/auth",
      user
    );
  },
  uploadpost(data) {
    return Vue.axios.post(
      "http://localhost:3000/post",
      data
    );
  },
  getposts(data) {
    return Vue.axios.post(
      "http://localhost:3000/getposts",
      data
    );
  },
  searchusers(data) {
    return Vue.axios.post(
      "http://localhost:3000/search",
      data
    );
  },
  followuser(data) {
    return Vue.axios.post(
      "http://localhost:3000/follow",
      data
    );
  }
};
