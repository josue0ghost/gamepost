<template>
  <div class="">
    <router-link to="/profile">
      <button type="button" class="btn-icon-clipboard">
        <div>
          <a class="profile-photo"></a>
          <span>{{ username }}</span>
        </div>
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: sessionStorage.name
    }
  }
}
</script>
