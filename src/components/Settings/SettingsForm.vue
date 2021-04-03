<template>
  <div>
    <b-row class="mb-4">
      <b-col cols="4"> </b-col>
      <b-col cols="4">
        <b-input
          type="text"
          label="Your name"
          placeholder="your name"
          v-model="user.name"
        >
        </b-input>
      </b-col>
    </b-row>
    <card style="border-radius: 20px">
      <b-form @submit.prevent="updateProfile">
        <div class="settings-form">
          <b-row>
            <b-col cols="4">
              <label>web page</label>
            </b-col>
            <b-col cols="8">
              <b-input
                type="text"
                label="Webpage"
                placeholder="your webpage"
                v-model="user.webpage"
              >
              </b-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="4">
              <label>github</label>
            </b-col>
            <b-col cols="8">
              <b-input
                type="text"
                label="GitHub"
                placeholder="yourgithub"
                v-model="user.git"
              >
              </b-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="4">
              <label>linked in</label>
            </b-col>
            <b-col cols="8">
              <b-input
                type="text"
                label="Linked In"
                placeholder="your linked in"
                v-model="user.linkedin"
              >
              </b-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="4">
              <label>twitter</label>
            </b-col>
            <b-col cols="8">
              <b-input
                type="text"
                label="Twitter"
                placeholder="your twitter"
                v-model="user.twitter"
              >
              </b-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="4">
              <label>facebook</label>
            </b-col>
            <b-col cols="8">
              <b-input
                type="text"
                label="Facebook"
                placeholder="your facebook"
                v-model="user.facebook"
              >
              </b-input>
            </b-col>
          </b-row>
        </div>
      </b-form>
    </card>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import card from "@/components/Cards/Card.vue";

Vue.use(VueAxios, axios);

export default {
  components: {
    card
  },
  data() {
    return {
      user: {
        name: "",
        webpage: "",
        git: "",
        linkedin: "",
        twitter: "",
        facebook: ""
      }
    };
  },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    }
  },
  mounted() {
    Vue.axios
      .get(
        "https://y38x8sqx2b.execute-api.us-east-2.amazonaws.com/test/readDynamoNetworksTable"
      )
      .then(response => {
        console.log(response.data);
        this.user = response.data;
        console.log(this.user);
      });
  }
};
</script>
<style></style>
