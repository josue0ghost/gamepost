<template>
  <card>
    <b-row align-v="center" slot="header">
      <b-col cols="1">
        <div class="friend"></div>
      </b-col>
      <b-col cols="9">
        <b-link style="float: left; margin-left: 1rem;">
          {{ model.name }}
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
      <b-img :src="getImageUrl()" style="width:100%"></b-img>
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
</template>

<script>
import card from "@/components/Cards/Card.vue";
import IconifyIcon from "@iconify/vue";
import moreHorizontal from "@iconify/icons-pixelarticons/more-horizontal";
import commentIcon from "@iconify/icons-pixelarticons/comment";
import forwardIcon from "@iconify/icons-pixelarticons/forward";
import arrowUp from "@iconify/icons-pixelarticons/arrow-up";
import arrowDown from "@iconify/icons-pixelarticons/arrow-down";

export default {
  components: {
    card,
    IconifyIcon
  },
  data() {
    return {
      model: {
        name: "Arlene McGregor",
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
  methods: {
    getImageUrl() {
      const { imgsrc } = this.model;
      return `${imgsrc}`;
    }
  }
};
</script>
