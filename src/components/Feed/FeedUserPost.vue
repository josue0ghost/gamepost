<template>
  <div class="posting text-center">
    <div class="row container">
      <b-col cols="1">
        <div class="user"></div>
      </b-col>
      <b-col cols="11">
        <b-form role="form" @submit.prevent="onSubmit(onSubmit)">
          <b-form-textarea
            alternative
            class="mt-3 post-input"
            name="Post"
            placeholder="What are you creating?"
            rows="5"
            max-rows="5"
            no-resize
            v-model="model.textContent"
          >
          </b-form-textarea>
          <button class="post-icon" style="border: none; float: left;">
            <IconifyIcon :icon="icons.gamepadIcon" height="39" />
          </button>
          <button class="post-icon" type="submit" style="border: none; float: right;">
            <IconifyIcon :icon="icons.arrowRight" height="39" />
          </button>
        </b-form>
      </b-col>
    </div>
  </div>
</template>

<script>
import IconifyIcon from "@iconify/vue";
import gamepadIcon from "@iconify/icons-pixelarticons/gamepad";
import arrowRight from "@iconify/icons-pixelarticons/arrow-right";
import upload from "@/store/apiroutes.js";


export default {
  components: {
    IconifyIcon
  },
  data() {
    return {
      model: {
        textContent: ""
      },
      icons: {
        gamepadIcon,
        arrowRight
      }
    };
  },
  methods: {
    async onSubmit() {
      try {
        const data = {
          userid: localStorage.userid,
          content: this.model.textContent
        };

        await upload.uploadpost(data).then(response => {
          console.log(response);
        });
      } catch (err) {
        console.error(err);
      }
    }
  }
};
</script>
