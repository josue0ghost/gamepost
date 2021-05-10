<template>
  <div class="notification my-2">
    <card style="border-radius: 10px;"
      v-for="item in results"
      :key="item"
    >
      <b-row align-v="center">
        <b-col cols="2">
          <div class="friend"></div>
        </b-col>
        <b-col cols="8">
          <b-link style="float: left; margin-left: 1rem;">
            {{item.userName}} {{item.lastName}}
          </b-link>
        </b-col>
        <b-col cols="2">
          <IconifyIcon
            :icon="icons.userPlus"
            height="24"
            style="float: right; margin-right: .5rem"
            @click="AddUser(item.userid)"
          />
        </b-col>
      </b-row>
    </card>

    <footer>
      <div ref="infiniteScrollTrigger" id="scroll-trigger"></div>
      <div class="circle-loader" v-if="showloader"></div>
    </footer>
  </div>
</template>

<script>
import Vue from "vue";
import card from "@/components/Cards/Card.vue";
import IconifyIcon from "@iconify/vue";
import userPlus from '@iconify/icons-pixelarticons/user-plus';
import mUsers from "@/store/apiroutes.js";

export default Vue.extend({
  components: {
    card,
    IconifyIcon
  },
  data: () => {
    return {
      results: [],
      currentPage: 1,
      maxPerPage: 2,
      totalResults: 100,
      showloader: false,
      sparam: sessionStorage.userid,
      model: {
        name: ''
      },
      icons: {
        userPlus
      }
    };
  },
  watch: {
    sparam: function() {
      const data = {
        parameter: localStorage.searchparameter
      }
      
      this.GetUsers(data)
    }
  },
  computed: {
    pageCount() {
      return Math.ceil(this.totalResults/this.maxPerPage);
    },
    pageOffset() {
      return this.maxPerPage * this.currentPage;
    }
  },
  methods: {
    async AddUser(id){
      console.log(id);
      const data = {
        userid: sessionStorage.userid,
        followid: id
      }
      try {
        await mUsers.followuser(data).then(response => {
          console.log(response);
        });
      } catch (error) {
        console.log(error);
      }
    },
    async GetUsers(data) {
      try {
        await mUsers.searchusers(data).then(response => {
          console.log("Response", response.data.Items)
          if (response.status == 200) {
            this.results = [];
            response.data.Items.forEach(element => {
              console.log("Elemet", element )
              const searchdata = element
              const postObj = {
                userName: searchdata.userName,
                lastName: searchdata.lastName,
                userid: searchdata.userid
              }
              this.results.push(postObj);
            });
            
            this.showloader = false;
          }
        })
      } catch (error) {
        console.log(error);
      }
    },
    scrollTrigger() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0 && this.currentPage < this.pageCount) {
            this.showloader = true;
            const data = {
              parameter: localStorage.searchparameter
            }
            
            this.GetUsers(data)
          }
        })
      });

      observer.observe(this.$refs.infiniteScrollTrigger);
    }
  },
  mounted() {
    this.scrollTrigger();
  }
});
</script>
