<template>
  <gamepost> 
    <card
      v-for="item in postings"
      :key="item"
      style="margin-top: 1rem;"
    >
      <b-row align-v="center" slot="header">
        <b-col cols="1">
          <div class="friend"></div>
        </b-col>
        <b-col cols="9">
          <b-link style="float: left; margin-left: 1rem;">
            {{ item.username }}
          </b-link>
        </b-col>
        <b-col cols="2">
          <IconifyIcon
            :icon="icons.moreHorizontal"
            height="24"
            style="float: right; margin-right: .5rem"
          />
        </b-col>
      </b-row>

      <div class="container">
        <p>{{item.content}}</p>
        <b-img v-if="hasImage" :src="getImageUrl()" style="width:100%"></b-img>
      </div>

      <b-row class="mt-3">
        <b-col cols="4">
          <span class="mx-2" style="font-weight: bold; color: green">50</span>
          <IconifyIcon :icon="icons.arrowUp" height="36" color="black" />
          <span class="mx-2" style="font-weight: bold; color: red">0</span>
          <IconifyIcon :icon="icons.arrowDown" height="36" color="black" />
        </b-col>
        <b-col cols="4">
          <IconifyIcon :icon="icons.commentIcon" height="36" color="black" />
        </b-col>
        <b-col cols="4">
          <IconifyIcon :icon="icons.forwardIcon" height="36" color="black" />
        </b-col>
      </b-row>
    </card>

    <footer>
      <div ref="infiniteScrollTrigger" id="scroll-trigger"></div>
      <div class="circle-loader" v-if="showloader"></div>
    </footer>
  </gamepost>
</template>

<script>
import card from "@/components/Cards/Card.vue";
import IconifyIcon from "@iconify/vue";
import moreHorizontal from "@iconify/icons-pixelarticons/more-horizontal";
import commentIcon from "@iconify/icons-pixelarticons/comment";
import forwardIcon from "@iconify/icons-pixelarticons/forward";
import arrowUp from "@iconify/icons-pixelarticons/arrow-up";
import arrowDown from "@iconify/icons-pixelarticons/arrow-down";
import getposts from "@/store/apiroutes.js";

export default {
  components: {
    card,
    IconifyIcon,
  },
  data: () => {
    return {
      postings: [],
      currentPage: 1,
      maxPerPage: 2,
      totalResults: 100,
      showloader: false,
      hasImage: false,
      model: {
        username: '',
        content: '',
        imgsrc:
          "https://esports.as.com/2020/04/21/bonus/Minecraft-puede-manera-gratuita-navegador_1348085179_378891_660x371.jpg"
      },
      icons: {
        moreHorizontal,
        commentIcon,
        forwardIcon,
        arrowUp,
        arrowDown
      }
    };
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
    getImageUrl() {
      const { imgsrc } = this.model;
      return `${imgsrc}`;
    },
    async GetGamePosts(data) {
      try {
        await getposts.getposts(data).then(response => {
          console.log("Response", response)
          if (response.status == 200) {
            this.postings = [];
            response.data[0].forEach(element => {
              const postdata = element
              const postObj = {
                username: postdata.name,
                content: postdata.content
              }
              this.postings.push(postObj);
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
              userid: sessionStorage.userid
            }
            
            this.GetGamePosts(data)
          }
        })
      });

      observer.observe(this.$refs.infiniteScrollTrigger);
    }
  },
  mounted() {
    this.scrollTrigger();
  }
};
</script>

<style lang="scss" scoped>
gamepost {

  footer {
    position: relative;
    width: auto;
    height: 10rem;
    #scroll-trigger {
      height: 50px;
    }
    .circle-loader {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 5px solid rgba(255, 255, 255, .2);
      border-top: 5px solid rgb(11, 158, 216);
      animation: animate 1.5s infinite linear;
    }
  }
}
@keyframes animate {
  0% {
    transform: translate(-50%,-50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%,-50%) rotate(360deg);
  }
}
</style>
