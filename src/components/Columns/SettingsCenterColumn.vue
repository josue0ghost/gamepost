<template>
  <div>
    <ProfilePhoto style="margin-bottom: 1.5rem;" />
    <SettingsForm />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProfilePhoto from "@/components/Profile/ProfilePhoto.vue";
import SettingsForm from "@/components/Settings/SettingsForm.vue";

export default Vue.extend({
  components: {
    ProfilePhoto,
    SettingsForm
  }
});
</script>
